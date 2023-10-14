// npm moduleはmodule名でimport
const chalk = require('chalk')
// 自作moduleはrelative pathでimpport
const getNotes = require('./notes.js')

// process.argvでcommand line引数にaccessできる、argvはargument vectorの略
// 0: node path, 1: file path, 2-: arguments
console.log(process.argv)
const command = process.argv[2]

if (command == 'add') {
  console.log('Adding note!')
} else if (command == 'remove') {
  console.log('Removing note!')
}
