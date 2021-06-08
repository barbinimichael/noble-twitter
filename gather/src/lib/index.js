const Twitter = require('twitter-lite');
const axios = require('axios')
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

    client.get('tweets/search/recent', parameters)
      .then(q => {
        console.log('query', q)
      })
      .catch(e => {
        console.log('query error', e)
      })
  } catch (e) {
    console.log("There was an error calling the Twitter API.");
    console.dir(e);
  }
}

// create report from twitter json response

// run
(async () => {
  const client = await getTwitterClient()

  const date = getDate()
  console.log(date)

  getTwitterJSON(client, 'BarackObama', date)
})();
