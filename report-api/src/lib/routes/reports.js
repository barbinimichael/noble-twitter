const express = require('express')
const TwitterAccount = require('../schema/twitterAccount')
const Report = require('../schema/report')
const { ReportType, MediaType } = require('../../../../shared/enums')

const router = express.Router()

router.get('/', (req, res) => {
  Report.find({}, (error, doc) => {
    if (error) res.json({ message: error })
    else res.json(doc)
  })
})

const getReport = (req, res, type) => {
  const { accountName, date } = req.params
  TwitterAccount.findOne({ accountName, date, type }, newReport, (error, doc) => {
    if (error) res.json({ message: error })
    else res.json(doc)
  });
}

router.get('/:accountName/:date/full', (req, res) => {
  getReport(req, res, ReportType.FULL)
})

router.get('/:accountName/:date/summary', (req, res) => {
  getReport(req, res, ReportType.SUMMARY)
})


router.post('/', (req, res) => {
  const { accountName, reports } = req.body
  const twitterAccount = new TwitterAccount({ accountName, reports })
  twitterAccount.save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }))
})

router.put('/:accountName', (req, res) => {
  const { date, type, tweets } = req
  const report = new Report({ date, type, tweets })
  const path = 'reports.' + date
  const newReport = {}
  newReport[path] = report
  TwitterAccount.updateOne({ accountName: req.params.accountName }, newReport, (error, doc) => {
    if (error) res.json({ message: error })
    else res.json(doc)
  });
})

module.exports = router;