// npm moduleはmodule名でimport
const validator = require('validator')
// 自作moduleはrelative pathでimpport
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isURL('https//mead.io'))
