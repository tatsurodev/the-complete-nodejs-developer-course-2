const fs = require('fs')

const getNotes = function () {
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  // 重複するtitleのnoteをfilter
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })
  // 重複するnoteがない時は新しいnoteを追加
  if (duplicateNotes.length === 0) {
    notes.push({ title, body })
    saveNotes(notes)
    console.log('New note added!')
    // 重複するtitleのnoteがある時
  } else {
    console.log('Note title taken!')
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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
}
