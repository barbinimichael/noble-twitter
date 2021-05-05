const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')
const reportsRouter = require('./routes/reports')

const app = express()

app.use('/reports', reportsRouter)

app.get('/', (req, res) => {
  res.send('Noble Twitter API')
})

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
)

const port = process.env.port || 3000
app.listen(port, () => console.log('Listening on port', port))