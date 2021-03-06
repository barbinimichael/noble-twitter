const jwt = require('jsonwebtoken')
const { Errors } = require('../enums')

const authenticateToken = (req, res, next) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    next()
  } else {
    try {
      const token = req.headers.authorization?.split(' ')[1]
      const { firstName, lastName, email, phone, plan } = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.firstName = firstName
      req.lastName = lastName
      req.email = email
      req.phone = phone
      req.plan = plan
      next()
    } catch (error) {
      res.json({ error: Errors.INVALID_TOKEN })
    }
  }
}

module.exports = authenticateToken;