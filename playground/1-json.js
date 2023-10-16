const fs = require('fs')

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// json自体はただの文字列
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// fileに書き込み
// fs.writeFileSync('1-json.json', bookJSON)

// jsonをparseするとobject, array等に戻せる
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)
// fileから読み込み
// const dataBuffer = fs.readFileSync('1-json.json')
// bufferを文字列に
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

// challenge
// 1-json.jsonに下記のjsonを使用、値を変更後1-json.jsonにそのdataを書き込み
// {"name":"Andrew","planet":"Earth","age":27}
const dataBuffer = fs.readFileSync('1-json.json')
let dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = 'Gunther'
user.age = 54
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
