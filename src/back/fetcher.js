const https = require('https')
const url = `https://picsum.photos/id/${
  Math.floor(Math.random() * 500) + 1
}/info`

https.get(url, (res) => {
  res.setEncoding('utf8')
  let body = ''
  res.on('data', (data) => {
    body += data
  })
  res.on('end', () => {
    body = JSON.parse(body)
    console.log(body.download_url)
    console.log(body.author)
  })
})

module.exports = https
//unsure how to proceed
// const fetcher = require('./../../back/fetcher')
// console.log(fetcher)
