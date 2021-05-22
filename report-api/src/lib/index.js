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
require('dotenv/config')
require('./service/passport');

const corsOptions = {
  origin: 'http://localhost:3001',
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

app.use('/reports', authenticateToken, reportsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Noble Twitter API')
})

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log('Could not connect', err)
      return
    }
    console.log('Connected to DB')
  }
)

const port = process.env.port || 3000
app.listen(port, () => console.log('Listening on port', port))