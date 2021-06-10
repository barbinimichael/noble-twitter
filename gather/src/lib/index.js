const Twitter = require('twitter-lite');
const axios = require('axios')
const createReport = require('./createReport/createReport')
require('dotenv').config()

const api = axios.create({
  withCredentials: true,
  baseURL: 'https://api.nobulltwitter.com/',
  headers: {
    "Content-Type": "application/json",
  },
});

const getTwitterClient = async () => {
  try {
    // Retrieve the bearer token from twitter.
    const user = new Twitter({
      version: '2',
      extension: false,
      consumer_key: process.env.API_KEY,
      consumer_secret: process.env.API_SECRET_KEY,
    });

    const response = await user.getBearerToken();
    console.log(`Got the following Bearer token from Twitter: ${response.access_token}`);

    return new Twitter({
      version: '2',
      extension: false,
      bearer_token: response.access_token
    });

  } catch (e) {
    console.log("There was an error getting the Bearer token.");
    console.dir(e);
  }
}

const getDate = () => {
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);
  return currentDate.toISOString();
}

// to get from Twitter api
const getTwitterJSON = async (client, username, date) => {
  try {
    const parameters = {
      'query': `from:${username} -is:retweet -is:reply`,
      'expansions': 'attachments.media_keys',
      'media.fields': 'media_key,preview_image_url,public_metrics,url,type',
      'start_time': date,
      'tweet.fields': 'conversation_id,attachments,entities,created_at'
    };
    return client.get('tweets/search/recent', parameters).then(q => {
      return q
    })
      .catch(e => {
        console.log(e)
      })
  } catch (e) {
    console.log("There was an error calling the Twitter API when getting the main json.");
    console.dir(e);
  }
}

const getThreads = async (client, tweetJSON, username, tweetID) => {
  try {
    const parameters = {
      'query': `conversation_id:${tweetID} from:${username} to:${username}`,
      'expansions': 'attachments.media_keys',
      'media.fields': 'media_key,preview_image_url,public_metrics,url,type',
      'tweet.fields': 'attachments,entities'
    };
    return client.get('tweets/search/recent', parameters)
  } catch (e) {
    console.log("There was an error calling the Twitter API when getting the threads.");
    console.dir(e);
  }
}

// run
(async () => {
  const client = await getTwitterClient()
  const username = 'elonmusk'

  // const date = getDate()
  const date = '2021-06-04T00:00:00.300Z'
  console.log(date)

  const json = await getTwitterJSON(client, username, date);
  const promises = (json?.data?.length > 0) ?
    json.data.map(t =>
      getThreads(client, t, username, t.conversation_id)
    ) : []

  const subThreadResults = await Promise.all(promises)

  subThreadResults?.forEach((q, i) => {
    const subThreads = q?.data || [];
    console.log(q?.data?.conversation_id, q?.data?.length)
    json.data[i].subThreads = subThreads
  })

  console.log(JSON.stringify(json))

  const report = createReport(json, username, date)
  console.log(report)
})();
