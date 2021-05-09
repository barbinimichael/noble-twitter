const mongoose = require('mongoose')
const MediaLink = require('./mediaLink').schema
const Link = require('./link').schema

/** Represents a tweet. */
const Tweet = new mongoose.Schema({
  time: { type: Date, default: Date.now },
  text: String,
  isThread: Boolean,
  conversationId: Number,
  tweetId: Number,
  mediaLinks: [MediaLink],
  links: [Link]
});

module.exports = mongoose.model('Tweet', Tweet);