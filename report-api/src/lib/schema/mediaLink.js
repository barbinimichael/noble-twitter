const mongoose = require('mongoose')
const { MediaType } = require('../enums')

/** Represents some sort of Media (image or video). */
const MediaLink = new mongoose.Schema({
  start: Number,
  end: Number,
  url: String,
  type: { type: Number, enum: Object.values(MediaType) }
});

module.exports = mongoose.model('MediaLink', MediaLink);