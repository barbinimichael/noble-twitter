const createReport = (request, accountName, isSubThread) => {

  const { data, includes, meta } = request || {}
  if (!data || data?.length === 0) return '';

  data.reverse()
  const tweetElements = data?.map(tweet => {
    let html = ''
    const { entities, text, created_at, attachments, subThreads } = tweet

    let lastEnd = 0;
    const { urls, mentions } = entities || {}
    const firstURL = urls?.length > 0 ? [urls?.[0]] : []
    const allEntities = firstURL.concat((mentions || []))
    allEntities.sort((a, b) => a.start - b.start)
    allEntities.forEach(e => {
      const { start, end } = e;
      html += '<p>' + text.slice(lastEnd, start) + '</p>'
      if (e.username) {
        html += `
          <a href='https://twitter.com/${e.username}'>
            ${e.username}
          </a>
        `
      } else if (e.url) {
        html += `
          <a href='${e.url}'>
            ${e.url}
          </a>
        `
      }
      lastEnd = end;
    })
    html += '<p>' + text.slice(lastEnd) + '</p>'

    const { media_keys } = attachments || {}
    html += `<div class='imageContainer'/>`
    media_keys?.forEach(key => {
      const media = includes?.media?.find?.(m => m.media_key === key)
      const { type, preview_image_url, url, public_metrics } = media || {}
      if (type === 'video') {
        html += `
        <img src='${preview_image_url}' />
        `
      } else if (type === 'photo') {
        html += `
          <img src='${url}' />
        `
      }
    })
    html += '</div>'

    const date = new Date(created_at)
    const hours = date.getHours();
    const isPM = hours > 12
    const mins = date.getMinutes();
    const pad = mins < 10;
    const time = (isPM ? hours - 12 : hours) + ':' + (
      pad ? + '0' + mins.toString() : mins
    ) + (
        isPM ? 'PM' : 'AM'
      )

    const subElements = subThreads ? createReport(subThreads, accountName, true) : ''
    return (
      isSubThread ? `
      <div class='subThread'>
        ${html}
      </div>
      ` :
        `
      <div class='tweet'>
        ${subThreads?.data?.length > 0 ? `
          <h3 class='thread'>${time}: A Thread</h3>
          <div class='subThread'>${html}</div>
        ` : `
          <h3 class='time'>${time}:&nbsp;</h3>
          ${html}
        `}
        ${subElements}
      </div>
      `
    )
  }) || []

  let concatTweets = ''
  tweetElements.forEach(t => concatTweets += t)
  if (!(concatTweets || isSubThread)) concatTweets = 'No Tweets Today'

  return (
    isSubThread ? concatTweets :
      `
        <h2>${accountName}</h2>
        ${concatTweets}
      `
  )
}

const htmlWrapper = (date, content) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <style>
        .background {
          font-family: Helvetica;
          background-color: #ede6ff;
          padding: 2rem 1rem;
          border-radius: 0.5rem;   
        }
        h1 {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.5rem 0;
        }
        .title {
          text-decoration: underline;
        }
        h2, h3 {
          margin: 0;
        }
        .time {
          display: inline;
        }
        .time-thread {
          display: flex;
          justify-content: center;
        }
        .thread {
        }
        img {
          width: 15rem;
          height: 15rem;
          object-fit: cover;
        }
        a, p {
          display: inline;
        }
        .imageContainer {
          display: flex;
          width: 100%;
          overflow-x: auto;
        }
        .tweet {
          margin: 3rem 0;
        }
        .subThread {
          margin-top: 1rem;
          border-left: 2px solid black;
          padding-left: 1rem;
        }
      </style>
    </head>
    <body>
      <div class='background'>
        <h1 class="title">Your Nobull Update</h1>
        <h1>${date}</h1>
        ${content}
      </div>
    </body>
  </html>
`

module.exports = { createReport, htmlWrapper }