const express = require('express')
const passport = require('passport');

const router = express.Router()

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate("google"), (req, res) => {
  res.redirect('http://localhost:3001/');
});

router.get('/logout', (req, res) => {
  req.logout();
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router