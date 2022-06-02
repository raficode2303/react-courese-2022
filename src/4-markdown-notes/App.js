import React, { useEffect, useState } from 'react'
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
  console.log('%c geeting localstorage', 'border: solid')
  return JSON.parse(localStorage.getItem('reacct-mark-down-notes')) || []
}

export default function App() {
  const [notes, setNotes] = useState(() => getLocalNotes())
  const [currentNote, setCurrentNote] = useState('')
  const [noteToEditId, setNoteToEditId] = useState(null)
  const [noteName, setNoteName] = useState('')
  const [isImportantNote, setIsImportantNote] = useState(false)

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

  const showNote = (id) => {
    const noteToShow = notes.find((note) => note.id === id)
    console.log('noteToShow: ', noteToShow)
    setCurrentNote(noteToShow.message)
    setNoteName(noteToShow.name ? noteToShow.name : '')
    setIsImportantNote(noteToShow.important)
    setNoteToEditId(id)
  }

  console.log('noteToEditId: ', noteToEditId)
  return (
    <div className='app'>
      <h2 className='app-name'>MarkDown Notes App</h2>
      <GlobalStyles />
      <Split>
        <SideBarNotes
          notes={notes}
          setNotes={setNotes}
          handleNewNote={handleNewNote}
          showNote={showNote}
          noteToEditId={noteToEditId}
          setNoteToEditId={setNoteToEditId}
          setCurrentNote={setCurrentNote}
          currentNote={currentNote}
          noteName={noteName}
          isImportantNote={isImportantNote}
          setIsImportantNote={setIsImportantNote}
        />
        <Split direction='vertical'>
          <WriteMarkDowon
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            handleNewNote={handleNewNote}
            boldText={boldText}
            setBoldText={setBoldText}
            noteName={noteName}
            setNoteName={setNoteName}
            isImportantNote={isImportantNote}
            setIsImportantNote={setIsImportantNote}
          />
          <PreviewMarkDown currentNote={currentNote} />
        </Split>
      </Split>
    </div>
  )
}
