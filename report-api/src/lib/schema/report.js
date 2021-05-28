const mongoose = require('mongoose')
const Tweet = require('./tweet').schema
const { ReportType } = require('../enums')

/** Represents a daily report compiled for a Twitter Account. */
const Report = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  type: { type: Number, enum: Object.values(ReportType) },
  tweets: [Tweet]
});

module.exports = mongoose.model('Report', Report);