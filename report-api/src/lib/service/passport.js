const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../schema/user')
require('dotenv/config')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id }).then(existingUser => {
    if (existingUser) {
      done(null, existingUser);
    } else {
      const { given_name, family_name, picture, email, locale } = profile._json
      new User({
        googleId: profile.id, firstName: given_name, lastName: family_name, picture, email, locale, plan: 0,
        following: []
      }).save()
        .then(user => done(null, user));
    }
  });
}));