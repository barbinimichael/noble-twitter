const createReport = require('../../lib/createReport/createReport')
const testJson = require('../examples/elon-06-02-2021-THREADS.json')
testCreateReport = () => {
  const date = new Date()
  const formatDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  console.log(createReport(testJson, 'elonmusk', '06/02/2021'));
}

module.exports = testCreateReport