const express = require('express')
const passport = require('passport');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../schema/user')
const { Errors } = require('../enums')

const router = express.Router()

router.post('/signUp', async (req, res) => {
  const { firstName, lastName, email, phone, password, plan, admin } = req.body

  await User.findOne({ email }, (error, doc) => {
    if (doc || error) res.json({ error: Errors.EMAIL_EXISTS })
  });

  await User.findOne({ phone }, (error, doc) => {
    if (doc || error) res.json({ error: Errors.PHONE_EXISTS })
  });

  const saltRounds = Math.round(Math.random() * 10 + 10)
  bcrypt.hash(password, saltRounds, (error, hashedPassword) => {
    if (error) res.json({ error: Errors.SERVER_ERROR })
    const user = new User({
      firstName, lastName, email, phone, password: hashedPassword, plan, admin
    })
    user.save()
      .then(() => res.json({ firstName, lastName, email, phone, plan, admin }))
      .catch(() => res.json({ error: Errors.SERVER_ERROR }))
  })
})

// login with either phone or email
router.post('/', (req, res) => {
  const { username, password } = req.body
  User.findOne().or([{ email: username }, { phone: username }])
    .then(user => {
      if (user) {
        const { firstName, lastName, email, phone, plan } = user
        bcrypt.compare(password, user.password, (error, result) => {
          if (error) res.json({ error: Errors.INVALID_CREDENTIALS })
          if (result) {
            const token = jwt.sign({
              firstName, lastName, email, phone, plan
            }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
            res.json({ token })
          }
        })
      }
    })
    .catch(() => {
      res.json({ error: Errors.SERVER_ERROR })
    })
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate("google"), (req, res) => {
  res.redirect(process.env.AUTH_REDIRECT_URL);
});

router.get('/logout', (req, res) => {
  req.logout();
});

module.exports = router