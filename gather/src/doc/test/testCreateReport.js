const { createReport, htmlWrapper } = require('../../lib/createReport/createReport')
const testJson = require('../examples/elon-06-02-2021-THREADS.json')

testCreateReport = () => {
  const twitterFormatDate = '2021-06-04T00:00:00.300Z'
  const date = new Date()
  const formatDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  console.log(htmlWrapper(formatDate, createReport(testJson, 'elonmusk')));
}

module.exports = testCreateReport