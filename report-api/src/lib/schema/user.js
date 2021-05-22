const mongoose = require('mongoose')
const { PlanType } = require('../../../../shared/enums')

/** Represents a user subscribed to the NoBull service. */
const User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  googleId: String,
  password: String,
  plan: { type: Number, enum: Object.values(PlanType) }
});

module.exports = mongoose.model('User', User);