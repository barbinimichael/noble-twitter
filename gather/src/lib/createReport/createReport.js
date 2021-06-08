const createReport = (request, accountName, date) => {
  const { data, includes, meta } = request || {}

  const tweetElements = data?.map(tweet => {
    let html = ''
    const { entities, text, created_at, attachments } = tweet

    let lastEnd = 0;
    const { urls, mentions } = entities
    const allEntities = (urls || []).concat((mentions || []))
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
          <a href='https://twitter.com/${e.username}'>
            ${e.url}
          </a>
        `
      }
      lastEnd = end;
    })
    html += '<p>' + text.slice(lastEnd) + '</p>'

    const { media_keys } = attachments || {}

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

    return (
      `
      <div>
        <h3>${time}</h3>
        ${html}
      </div>
      `
    )
  })

  let concatTweets = ''
  tweetElements.forEach(t => concatTweets += t)

  return (
    `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: #ede6ff;
            }
            h2, h3 {
              margin: 0;
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