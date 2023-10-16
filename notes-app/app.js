// npm moduleはmodule名でimport
const chalk = require('chalk')
const yargs = require('yargs')
// 自作moduleはrelative pathでimpport
const notes = require('./notes.js')

// process.argvでcommand line引数にaccessできる、argvはargument vectorの略
// 0: node path, 1: file path, 2-: arguments
// console.log(process.argv)

// yargsでcommandをparse
// node app.js add --title="This is title"
// console.log(yargs.argv) // { _: [ 'add' ], title: 'this is title', '$0': 'app.js' }

// customize yargs version
yargs.version('1.1.0')

// commandを作成すると、ndoe app.js --helpでその内容が確認できる
// Creat add command
yargs.command({
  command: 'add',
  // helpで表示するdescription
  describe: 'Add a new note',
  // parameterをbuilderで指定
  builder: {
    title: {
      describe: 'Note title',
      // require or not
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  // commandの処理
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})

// Create remove comamnd
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
})

// Create list comamnd
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler() {
    notes.listNotes()
  },
})

// Create read comamnd
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
})

// 最後にparseさせないとcommandが使えないので注意
yargs.parse()
