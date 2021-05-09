const mongoose = require('mongoose')

/** Represents some sort of Media (image or video). */
const Link = new mongoose.Schema({
  start: Number,
  end: Number,
  url: String
});

module.exports = mongoose.model('Link', Link);