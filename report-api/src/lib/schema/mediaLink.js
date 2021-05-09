const mongoose = require('mongoose')
const { MediaType } = require('../../../../shared/enums')

/** Represents some sort of Media (image or video). */
const MediaLink = new mongoose.Schema({
  start: Number,
  end: Number,
  url: String,
  type: { type: String, enum: Object.values(MediaType) }
});

module.exports = mongoose.model('MediaLink', MediaLink);