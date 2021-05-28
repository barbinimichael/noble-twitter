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

/**
 * A user plan can be either
 * 0) 'free' or
 * 1) 'paid'
 */
const PLAN_TYPE = Object.freeze({
  FREE: 0,
  PAID: 1
})

const ERRORS = Object.freeze({
  SERVER_ERROR: 'server-error',
  EMAIL_EXISTS: 'email-already-exists',
  PHONE_EXISTS: 'phone-already-exists',
  INVALID_CREDENTIALS: 'invalid-credentials',
  INVALID_TOKEN: 'invalid-token',
  NOT_FOUND: 'query could not find data'
})

module.exports = {
  ReportType: REPORT_TYPE,
  MediaType: MEDIA_TYPE,
  PlanType: PLAN_TYPE,
  Errors: ERRORS
}