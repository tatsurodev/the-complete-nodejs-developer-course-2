const dotenv = require('dotenv')
const request = require('request')

// 開発環境(development or production)によって.envを使い分け
// NODE_ENV=development node app.js
// NODE_ENV=production node app.js
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

// .envを値を使用するには、process.env.KEY
// console.log(process.env.TEST)

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=37.8267,-122.4233`

request({ url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
