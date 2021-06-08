const createReport = require('../../lib/createReport/createReport')
const testJson = require('../examples/obama-05-31-2021-06-06-2021.json')

testCreateReport = () => {
  const date = new Date()
  const formatDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  console.log(createReport(testJson, 'Obama', '05/31/2021'));
}

module.exports = testCreateReport