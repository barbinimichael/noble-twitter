const express = require('express')
const User = require('../schema/user')
const { Errors } = require('../enums')

const router = express.Router()

router.get('/following', (req, res) => {
  res.json(req.user?.following || [])
})

router.post('/following', (req, res) => {
  const { following } = req.body
  const googleId = req.user?.googleId
  if (googleId) {
    User.findOneAndUpdate(
      { googleId },
      { following },
      { new: true },
      (error, doc) => {
        if (error) res.json({ error: Errors.NOT_FOUND })
        else res.json(doc.following)
      }
    )
  }
})

router.put('/following', (req, res) => {
  const { newFollowing } = req.body
  const googleId = req.user?.googleId
  if (googleId) {
    User.findOneAndUpdate(
      { googleId },
      { "$push": { following: newFollowing } },
      { new: true },
      (error, doc) => {
        console.log(doc)
        if (error) res.json({ error: Errors.NOT_FOUND })
        else res.json(doc.following)
      }
    )
  }
})

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/check/:accountName', (req, res) => {
  const { accountName } = req.params
  const parameters = {
    usernames: accountName
  };
  (async () => {
    global.twitterClient?.get(`users/by`, parameters)
      .then(q => {
        console.log(q)
        if (q.errors) res.json({ error: Errors.NOT_FOUND })
        else res.json({ user: accountName })
      })
      .catch(e => {
        console.log(e)
        res.json({ error: Errors.NOT_FOUND })
      })
  })()
})

router.get('/', (req, res) => {
  User.find()
    .then(doc => {
      const users = doc.map(d => {
        const { firstName, email, following } = d || {}
        return {
          firstName, email, following
        }
      })
      res.json(users)
    })
    .catch(() => res.json({ error: Errors.SERVER_ERROR }))
})

module.exports = router;