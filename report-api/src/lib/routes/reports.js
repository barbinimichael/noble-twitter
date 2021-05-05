const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Reports')
})

router.get('/:account/:date/full', (req, res) => {

})

router.post('/:account/:date/full', (req, res) => {

})

router.get('/:account/:date/summary', (req, res) => {

})

router.post('/:account/:date/summary', (req, res) => {

})

module.exports = router;