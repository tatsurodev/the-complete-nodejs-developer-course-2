const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  // 重複するtitleのnoteをfilter
  // const duplicateNotes = notes.filter((note) => note.title === title)
  // 重複を全てfilterするより、findで最初に見つかったものをreturnする方が速い、findは該当がなければundefined
  const duplicateNote = notes.find((note) => note.title === title)
  // 重複するnoteがない時は新しいnoteを追加
  // DevToolsでdebugしたい箇所に使用
  // debugger
  if (!duplicateNote) {
    notes.push({ title, body })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
    // 重複するtitleのnoteがある時
  } else {
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  // 同titleありで削除時の処理
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
    // 同titleなしで削除なし時の処理
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const listNotes = () => {
  console.log(chalk.inverse('Your notes'))
  const notes = loadNotes()
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  // notes.jsonがなかったり、json formatでなかった場合、空のarrayを返す
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

// 複数exportする時はobjectで
module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
}
