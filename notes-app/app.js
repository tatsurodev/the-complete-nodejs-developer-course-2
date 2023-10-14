// core moduleの使用
// require(moduleName)でCommonJS形式による読み込みが可能
const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Andrew.')
fs.appendFileSync('notes.txt', ' I live in Philadelphia.')