const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const reportsRouter = require('./routes/reports')
const usersRouter = require('./routes/users')
const authenticateToken = require('./middleWare/authenticateToken')
require('dotenv/config')

const corsOptions = {
  origin: `http://localhost:${process.env.port || 3000}`,
  optionsSuccessStatus: 200,
  methods: 'GET, PUT, POST'
}

mongoose.set('returnOriginal', false)

const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use('/reports', authenticateToken, reportsRouter)
app.use('/users', usersRouter)

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