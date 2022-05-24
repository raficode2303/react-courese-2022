import React, { useState } from 'react'
import { nanoid } from 'nanoid'

// componenets
import { GlobalStyles } from './components/GlobalStyles'
import { PreviewMarkDown } from './components/PreviewMarkDown'
import { SideBarNotes } from './components/SideBarNotes'
import { WriteMarkDowon } from './components/WriteMarkDowon'

// CONST

export default function App() {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState('')
  const [noteToEditId, setNoteToEditId] = useState(null)
  const [boldText, setBoldText] = useState(false)

  const handleNewNote = (e) => {
    const newNote = e.target.value
    console.log('newNote: ', newNote)
    setCurrentNote(newNote)

    if (!noteToEditId) {
      setCurrentNote(newNote)
    } else {
    }
  }

  const addNote = () => {
    // handle edit note
    if (!currentNote) {
      alert('Enter message')
      return
    }
    if (noteToEditId) {
      const newNotes = notes.map((note) =>
        note.id === noteToEditId ? { ...note, message: currentNote } : note
      )
      setNotes(newNotes)
      setNoteToEditId('')
    } else {
      // handle new note
      const id = nanoid()
      setNotes([...notes, { message: currentNote, id }])
    }
  }

  const showNote = (id) => {
    const noteToShow = notes.find((note) => note.id === id)
    console.log('noteToShow: ', noteToShow)
    setCurrentNote(noteToShow.message)
    setNoteToEditId(id)
  }
  console.log('noteToEditId: ', noteToEditId)
  return (
    <div className='app'>
      <GlobalStyles />
      <SideBarNotes
        notes={notes}
        addNote={addNote}
        handleNewNote={handleNewNote}
        showNote={showNote}
        noteToEditId={noteToEditId}
      />
      <WriteMarkDowon
        currentNote={currentNote}
        handleNewNote={handleNewNote}
        boldText={boldText}
        setBoldText={setBoldText}
      />
      <PreviewMarkDown currentNote={currentNote} />
    </div>
  )
}
