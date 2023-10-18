const dotenv = require('dotenv')

// 開発環境(development or production)によって.envを使い分け
// NODE_ENV=development node app.js
// NODE_ENV=production node app.js
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

// .envを値を使用するには、process.env.KEY
// console.log(process.env.TEST)
