// npm moduleはmodule名でimport
const chalk = require('chalk')
// 自作moduleはrelative pathでimpport
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.blue.inverse.bold('Success!')
console.log(greenMsg)
