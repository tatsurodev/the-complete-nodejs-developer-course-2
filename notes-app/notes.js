const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  // 重複するtitleのnoteをfilter
  const duplicateNotes = notes.filter((note) => note.title === title)
  // 重複するnoteがない時は新しいnoteを追加
  if (duplicateNotes.length === 0) {
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
  getNotes,
  addNote,
  removeNote,
}
