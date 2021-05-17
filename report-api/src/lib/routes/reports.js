const express = require('express')
const TwitterAccount = require('../schema/twitterAccount')
const Report = require('../schema/report')
const { ReportType, Errors } = require('../../../../shared/enums')

const router = express.Router()

router.get('/', (req, res) => {
  TwitterAccount.find()
    .then(doc => {
      const reports = {}
      doc.forEach(d => reports[d.accountName] = d.reports)
      res.json(reports)
    })
    .catch(() => res.json({ error: Errors.SERVER_ERROR }))
})

const getReport = (req, res, type) => {
  const { accountName, date } = req.params
  TwitterAccount.findOne({ accountName, [`reports.${date}.type`]: type }, (error, doc) => {
    if (error || !doc) res.json({ error: Errors.NOT_FOUND })
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
    .catch(() => res.json({ error: SERVER_ERROR }))
})

router.put('/:accountName', (req, res) => {
  const { date, type, tweets } = req
  const report = new Report({ date, type, tweets })
  TwitterAccount.updateOne({ accountName: req.params.accountName }, { [`reports.${date}`]: report }, (error, doc) => {
    if (error) res.json({ error: NOT_FOUND })
    else res.json(doc)
  });
})

module.exports = router;