/** 
 * A report can either a 
 * 0) 'full' summary that has all the tweets from the day or a
 * 1) 'summary' report that only contains the 'MOST IMPORTANT' tweets
 */
const REPORT_TYPE = Object.freeze({
  FULL: 0,
  SUMMARY: 1
})

/** 
 * Media can either an
 * 0) 'image' or a 
 * 1) 'video'
 */
const MEDIA_TYPE = Object.freeze({
  IMAGE: 0,
  VIDEO: 1
})

module.exports = {
  ReportType: REPORT_TYPE,
  MediaType: MEDIA_TYPE
}