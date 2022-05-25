import React, { useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
// SPlit-it Component
import Split from 'react-split-it'
// Split-Style
import './split-style.css'
// componenets
import { GlobalStyles } from './components/GlobalStyles'
import { PreviewMarkDown } from './components/PreviewMarkDown'
import { SideBarNotes } from './components/SideBarNotes'
import { WriteMarkDowon } from './components/WriteMarkDowon'

const getLocalNotes = () => {
  return JSON.parse(localStorage.getItem('reacct-mark-down-notes')) || []
}

export default function App() {
  const [notes, setNotes] = useState(getLocalNotes())
  const [currentNote, setCurrentNote] = useState('')
  const [noteToEditId, setNoteToEditId] = useState(null)
  const [boldText, setBoldText] = useState(false)

  const updateLocalNotes = () => {
    localStorage.setItem('reacct-mark-down-notes', JSON.stringify(notes))
  }
  useEffect(() => {
    updateLocalNotes()
  }, [notes])
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

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
    setNoteToEditId('')
    setCurrentNote('')
  }
  console.log('noteToEditId: ', noteToEditId)
  return (
    <div className='app'>
      <h2 className='app-name'>MarkDown Notes App</h2>
      <GlobalStyles />
      <Split>
        <SideBarNotes
          notes={notes}
          addNote={addNote}
          handleNewNote={handleNewNote}
          showNote={showNote}
          noteToEditId={noteToEditId}
          deleteNote={deleteNote}
        />
        <Split direction='vertical'>
          <WriteMarkDowon
            currentNote={currentNote}
            handleNewNote={handleNewNote}
            boldText={boldText}
            setBoldText={setBoldText}
          />
          <PreviewMarkDown currentNote={currentNote} />
        </Split>
      </Split>
    </div>
  )
}
