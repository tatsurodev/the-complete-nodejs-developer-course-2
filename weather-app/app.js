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

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API_KEY}&query=37.8267,-122.4233&units=f`

request({ url, json: true }, (error, response) => {
  // console.log(response.body.current)
  console.log(
    response.body.current.weather_descriptions[0] +
      '. It is currently ' +
      response.body.current.temperature +
      ' degress out. It feels like ' +
      response.body.current.feelslike +
      ' degress out.'
  )
})

// geocoding
// address -> lat/long -> weather

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log(latitude, longitude)
})
