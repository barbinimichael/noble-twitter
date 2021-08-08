const Twitter = require('twitter-lite');
const axios = require('axios');
const { createReport, htmlWrapper } = require('./createReport/createReport');
const aws = require('aws-sdk');
const ses = new aws.SES({ region: 'us-east-2' });
require('dotenv').config();

const CONFIGURATIONS = {
  TESTING: '0',
  PRODUCTION: '1',
};

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.NOBULL_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const loginNobullAPI = async () => {
  return api({
    method: 'post',
    url: `/auth`,
    data: {
      username: process.env.NOBULL_USERNAME,
      password: process.env.NOBULL_PASSWORD,
    },
  });
};

const getTwitterAccounts = async (token) => {
  return api({
    method: 'get',
    url: `/users`,
    headers: {
      Authorization: token,
    },
  });
};

const getTwitterClient = async () => {
  try {
    // Retrieve the bearer token from twitter.
    const user = new Twitter({
      version: '2',
      extension: false,
      consumer_key: process.env.TWITTER_API_KEY,
      consumer_secret: process.env.TWITTER_SECRET_KEY,
    });

    const response = await user.getBearerToken();

    return new Twitter({
      version: '2',
      extension: false,
      bearer_token: response.access_token,
    });
  } catch (e) {
    console.log('There was an error getting the Bearer token.');
    console.dir(e);
  }
};

const getTwitterFormatDate = () => {
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);
  currentDate.setDate(currentDate.getDate() - 1);
  return currentDate.toISOString();
};

// to get from Twitter api
const getTwitterJSON = async (client, username, date) => {
  try {
    const parameters = {
      'query': `from:${username} -is:retweet -is:reply`,
      'expansions': 'attachments.media_keys',
      'media.fields': 'media_key,preview_image_url,public_metrics,url,type',
      'start_time': date,
      'tweet.fields': 'conversation_id,attachments,entities,created_at',
    };
    return client.get('tweets/search/recent', parameters).then((q) => {
      return q;
    }).catch((e) => {
      console.log(e);
    });
  } catch (e) {
    console.log('There was an error calling the Twitter API when getting the main json.');
    console.dir(e);
  }
};

const getThreads = async (client, username, tweetID) => {
  try {
    const parameters = {
      'query': `conversation_id:${tweetID} from:${username} to:${username}`,
      'expansions': 'attachments.media_keys',
      'media.fields': 'media_key,preview_image_url,public_metrics,url,type',
      'tweet.fields': 'attachments,entities',
    };
    return client.get('tweets/search/recent', parameters);
  } catch (e) {
    console.log('There was an error calling the Twitter API when getting the threads.');
    console.dir(e);
  }
};

exports.handler = async (event, context) => {
  const client = await getTwitterClient();

  const reports = {};
  const date = new Date();
  const formatDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  console.log(formatDate);

  let users = [];

  /** ***************************************************CONFIGURATION*************************************************/
  if (process.env.CONFIGURATION === CONFIGURATIONS.PRODUCTION) {
    // get all users (email, twitter accounts) from database
    const tokenResponse = await Promise.resolve(loginNobullAPI()).catch((e) => console.log(e));
    const token = 'Bearer ' + tokenResponse?.data?.token;

    const usersResponse = await Promise.resolve(getTwitterAccounts(token)).catch((e) => console.log(e));
    users = usersResponse?.data;
  } else if (process.env.CONFIGURATION === CONFIGURATIONS.TESTING) {
    users = [{
      email: process.env.TEST_EMAIL, following: [
        'naval', 'balajis', 'raydalio', 'elonmusk', 'latimes', 'Phillies', 'JoelEngardio',
      ],
    }];
  }

  /** ***************************************************REPORTS*************************************************/
  const twitterAccounts = new Set();
  users.forEach((u) => {
    u?.following?.forEach((f) => twitterAccounts.add(f));
  });

  const reportPromises = Array.from(twitterAccounts).map(async (t) => {
    const username = t;

    const json = await getTwitterJSON(client, username, getTwitterFormatDate());
    const promises = (json?.data?.length > 0) ?
      json.data.map((t) =>
        getThreads(client, username, t.conversation_id),
      ) : [];

    const subThreadResults = await Promise.all(promises);

    subThreadResults?.forEach((q, i) => {
      json.data[i].subThreads = q;
    });

    const report = createReport(json, username);
    reports[username] = report;
  });
  await Promise.all(reportPromises);

  /** ***************************************************SEND REPORTS*************************************************/
  const sendPromises = [];
  users.forEach((u) => {
    if (u?.following?.length > 0) {
      let briefing = '';
      u.following.forEach((f) => {
        briefing += reports[f];
      });

      const params = {
        Destination: {
          ToAddresses: [
            u.email,
          ],
        },
        Message: {
          Body: {
            Html: {
              Charset: 'UTF-8',
              Data: htmlWrapper(formatDate, briefing),
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: `Your briefing for ${formatDate}`,
          },
        },
        Source: 'NoBullUpdate@nobulltwitter.com',
      };

      sendPromises.push(ses.sendEmail(params).promise());
    }
  });
  return Promise.all(sendPromises);
};
