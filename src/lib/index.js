const Twitter = require('twitter-lite');
require('dotenv/config')

const apiKey = process.env.API_KEY
const apiSecretKey = process.env.API_SECRET_KEY

console.log(apiKey)
console.log(apiSecretKey)

const user = new Twitter({
  version: '2',
  extension: false,
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
});

(async function () {
  try {
    // Retrieve the bearer token from twitter.
    const response = await user.getBearerToken();
    console.log(`Got the following Bearer token from Twitter: ${response.access_token}`);

    const client = new Twitter({
      version: '2',
      extension: false,
      bearer_token: response.access_token
    });

    const parameters = {
      query: "from:elonmusk"
    };

    const query = client.get('tweets/search/recent', parameters)
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
})();