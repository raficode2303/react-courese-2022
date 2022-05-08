import React, { useState } from 'react'

// componenets
import { GlobalStyles } from './components/GlobalStyles'
import { SideBarNotes } from './components/SideBarNotes'
import { WriteMarkDowon } from './components/WriteMarkDowon'
import { PreviewMarkDown } from './components/PreviewMarkDown'

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [noteToEditId, setNoteToEditId] = useState(null)

  const handleNewNote = (e) => {
    const currentNote = e.target.value
    if (!noteToEditId) {
      setNewNote({ message: currentNote, id: Date.now().toString() })
    } else {
      const newNotes = notes.map((note) =>
        note.id === noteToEditId ? currentNote : note
      )
      setNotes(newNotes)
      setNoteToEditId(null)
    }
  }

  const addNote = () => {
    if (!newNote) return
    setNotes([...notes, newNote])
    setNewNote('')
  }

  const showNote = (id) => {
    const noteToShow = notes.find((note) => note.id === id)
    console.log('noteToShow: ', noteToShow)
    setNewNote(noteToShow)
    setNoteToEditId(id)
  }
  return (
    <div className='app'>
      <GlobalStyles />
      <SideBarNotes
        notes={notes}
        addNote={addNote}
        handleNewNote={handleNewNote}
        showNote={showNote}
      />
      <WriteMarkDowon newNote={newNote} handleNewNote={handleNewNote} />
      <PreviewMarkDown newNote={newNote} />
    </div>
  )
}
