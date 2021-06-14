const createReport = (request, accountName, date, isSubThread) => {

  const { data, includes, meta } = request || {}
  if (!data || data?.length === 0) return;

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

    const subElements = subThreads ? createReport(subThreads, accountName, date, true) : ''
    return (
      isSubThread ? `
      <div class='subThread'>
        ${html}
      </div>
      ` :
        `
      <div class='tweet'>
        <h3>${time}${subThreads?.data?.length > 0 ? ' (Thread)' : ''}</h3>
        ${html}
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
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: #ede6ff;
              padding: 0 1rem;
            }
            h2, h3 {
              margin: 0;
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
              margin: 1rem 0;
            }
            .subThread {
              margin: 1rem 0 0 1rem;
              border-left: 0.25rem solid black;
              padding-left: 1rem;
            }
          </style>
        </head>
        <body>
          <h1 class="title">
            Your Twitter Briefing for ${date}
          </h1>
          <h2>${accountName}</h2>
          ${concatTweets}
        </body>
      </html>
    `
  )
}

module.exports = createReport