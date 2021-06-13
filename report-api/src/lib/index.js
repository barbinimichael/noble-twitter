const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session');
const passport = require('passport');
const reportsRouter = require('./routes/reports')
const usersRouter = require('./routes/users')
const authenticateToken = require('./middleWare/authenticateToken')
const authRouter = require('./routes/auth')
const twitter = require('twitter-lite');
require('dotenv').config()
require('./service/passport');

var whitelist = [process.env.UI_ORIGIN_URL, process.env.GATHER_ORIGIN_URL]
var corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200,
  methods: 'GET, PUT, POST',
  credentials: true
}

mongoose.set('returnOriginal', false)

const app = express()
app.use(cors(corsOptions))
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  keys: [process.env.JWT_SECRET_KEY],
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())

const user = new twitter({
  version: '2',
  extension: false,
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
});

(async () => {
  try {
    // Retrieve the bearer token from twitter.
    const response = await user.getBearerToken();

    global.twitterClient = new twitter({
      version: '2',
      extension: false,
      bearer_token: response.access_token
    });
    console.log('Connected to Twitter API.');
  } catch (e) {
    console.log('There was an error connecting to the Twitter API.', e);
  }
})();

app.use('/reports', authenticateToken, reportsRouter)
app.use('/users', authenticateToken, usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Noble Twitter API')
})

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) {
      console.log('Could not connect', err)
      return
    }
    console.log('Connected to DB')
  }
)

const port = process.env.PORT || 8080
app.listen(port, () => console.log('Listening on port', port))