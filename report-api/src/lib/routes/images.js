const express = require('express')
const picture = require('../images/nobull-logo.png')

const router = express.Router()

app.get('/inverted-logo', function (req, res) {
  res.sendFile(picture);
});

module.exports = router;