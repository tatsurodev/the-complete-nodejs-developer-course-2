// npm moduleはmodule名でimport
const chalk = require('chalk')
const yargs = require('yargs')
// 自作moduleはrelative pathでimpport
const getNotes = require('./notes.js')

// process.argvでcommand line引数にaccessできる、argvはargument vectorの略
// 0: node path, 1: file path, 2-: arguments
// console.log(process.argv)

// yargsでcommandをparse
// node app.js add --title="This is title"
console.log(yargs.argv) // { _: [ 'add' ], title: 'this is title', '$0': 'app.js' }

// customize yargs version
yargs.version('1.1.0')

// commandを作成すると、ndoe app.js --helpでその内容が確認できる
// Creat add command
yargs.command({
  command: 'add',
  // helpで表示するdescription
  describe: 'Add a new note',
  // commandの処理
  handler: function () {
    console.log('Adding a new note!')
  },
})

// Create remove comamnd
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  },
})

// Create list comamnd
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () {
    console.log('Listing the note')
  },
})

// Create read comamnd
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note')
  },
})
