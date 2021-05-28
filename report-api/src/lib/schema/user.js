const mongoose = require('mongoose')
const { PlanType } = require('../enums')

/** Represents a user subscribed to the NoBull service. */
const User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  picture: String,
  phone: String,
  googleId: String,
  password: String,
  locale: String,
  plan: { type: Number, enum: Object.values(PlanType) },
  following: [String]
});

module.exports = mongoose.model('User', User);