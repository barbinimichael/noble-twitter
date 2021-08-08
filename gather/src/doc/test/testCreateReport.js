const { createReport, htmlWrapper } = require('../../lib/createReport/createReport');
const testJson = require('../examples/elon-06-02-2021-THREADS.json');

testCreateReport = () => {
  const twitterFormatDate = '2021-06-04T00:00:00.300Z';
  const date = new Date();
  const formatDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  const report = createReport(testJson, 'elonmusk');
  console.log(htmlWrapper(formatDate, report + report));
};

module.exports = testCreateReport;
