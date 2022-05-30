import { useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DivStyled = styled.div`
  height: 100vh;
  button {
    cursor: pointer;
    background-color: #369;
    font-size: 2rem;
    :hover {
      background-color: aqua;
      color: green;
    }
    :active {
      transform: scale(0.98);
    }
  }
  .message {
  }
  .message:after {
    color: #fff;
    padding: 2px;
    gap: 4px;
    border-radius: 5px;
  }
  .delete-message::after {
    content: 'message deleted!';
    background-color: red;
  }
  .add-message::after {
    content: 'message added!';
    background-color: green;
  }
  .edited-message::after {
    content: ' message edited!';
    background-color: blueviolet;
  }
  .clear-all-message::after {
    content: ' all clear!';
    color: red;
    background-color: #fff;
  }
  .note {
    border: 2px solid #fff;
    width: 66%;
    margin: 0 auto;
    margin-bottom: 4px;
    border-radius: 4px;
    background-color: rebeccapurple;
    transition: 1s;
  }
  .note-remove {
    opacity: 0;
    margin-right: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
  }
  .edit-note {
    background-color: yellow;
  }
  .note:hover > .delete-icon {
    visibility: visible;
  }
  .delete-icon {
    visibility: hidden;
    color: red;
    font-size: 1.4rem;
    margin: 0 auto;
    margin-left: 25%;
  }
  .delete-icon:hover {
    color: orange;
  }
  .delete-icon:active {
    color: darkred;
  }

  .important-note {
    color: orange;
  }
  .clear-all {
    color: red;
    background-color: #fff;
  }
  .clear-all:hover {
    color: #fff;
    background-color: red;
  }
`

export const SideBarNotes = ({
  notes,
  setNotes,
  showNote,
  noteToEditId,
  setNoteToEditId,
  setCurrentNote,
  currentNote,
  noteName,
  isImportantNote,
  setIsImportantNote,
}) => {
  const item1Ref = useRef()
  const messageRef = useRef()
  useEffect(() => {
    item1Ref.current.parentElement.style.backgroundColor = 'purple'
  }, [])

  const addNote = () => {
    // handle edit note
    if (!currentNote) {
      alert('Enter message')
      return
    }
    if (noteToEditId) {
      const newNotes = notes.map((note) =>
        note.id === noteToEditId
          ? {
              ...note,
              message: currentNote,
              name: noteName,
              important: isImportantNote,
            }
          : note
      )
      setNotes(newNotes)
      setNoteToEditId('')
      toggleMessage('edited-message')
    } else {
      // handle new note
      const id = nanoid()
      setNotes([
        ...notes,
        {
          id,
          message: currentNote,
          name: noteName,
          important: isImportantNote,
        },
      ])
      toggleMessage('add-message')
    }
    setIsImportantNote(false)
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
    setNoteToEditId('')
    setCurrentNote('')
    toggleMessage('delete-message')
  }
  const toggleMessage = (messgae) => {
    messageRef.current.classList.add(messgae)
    setTimeout(() => {
      messageRef.current.classList.remove(messgae)
    }, 1500)
  }
  console.log('sidebar notes length', notes)
  return (
    <DivStyled className='item item1' ref={item1Ref}>
      <h2>
        Notes
        <button className='add-note' onClick={addNote}>
          {noteToEditId ? 'Edit..' : '+'}
        </button>
      </h2>
      <small className='message' ref={messageRef}></small>
      {notes?.map((note, index) => (
        <div
          key={note.id}
          className='note'
          onTransitionEnd={() => deleteNote(note.id)}
        >
          <span
            key={note.id}
            className={
              note.id === noteToEditId
                ? 'edit-note'
                : note.important
                ? 'important-note'
                : ''
            }
            onClick={() => showNote(note.id)}
          >
            {note.name ? note.name : `Note${parseInt(index) + 1}`}
          </span>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className='delete-icon'
            onClick={(e) =>
              e.currentTarget.parentElement.classList.toggle('note-remove')
            }
          ></FontAwesomeIcon>
        </div>
      ))}
      <hr />
      <div>
        {notes.length > 0 ? (
          <button
            className='clear-all'
            onClick={() => {
              setNotes([])
              toggleMessage('clear-all-message')
            }}
          >
            Clear All!
          </button>
        ) : (
          <p> 😁You Have No Notes..</p>
        )}
      </div>
    </DivStyled>
  )
}
