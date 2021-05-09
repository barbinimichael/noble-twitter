const mongoose = require('mongoose')
const Report = require('./report').schema

/** Represents a Twitter Account that has reports compiled for it. */
const TwitterAccount = new mongoose.Schema({
  accountName: String,
  reports: { type: Map, of: Report },
});

module.exports = mongoose.model('TwitterAccount', TwitterAccount);