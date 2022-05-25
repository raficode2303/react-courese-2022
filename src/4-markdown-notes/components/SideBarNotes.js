import { useEffect, useRef } from 'react'
import styled from 'styled-components'

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
  .edit-note {
    background-color: yellow;
  }
`

export const SideBarNotes = ({
  addNote,
  notes,
  showNote,
  noteToEditId,
  deleteNote,
}) => {
  const item1Ref = useRef()
  useEffect(() => {
    item1Ref.current.parentElement.style.backgroundColor = 'purple'
  }, [])

  console.log('sidebar notes length', notes)
  return (
    <DivStyled className='item item1' ref={item1Ref}>
      <h2>
        Notes
        <button className='add-note' onClick={addNote}>
          {noteToEditId ? 'Edit..' : '+'}
        </button>
      </h2>
      {notes?.map((note, index) => (
        <p key={note.id}>
          <span
            key={note.id}
            onClick={() => showNote(note.id)}
            className={note.id === noteToEditId ? 'edit-note' : ''}
          >
            Note{index + 1}
          </span>
          <button onClick={() => deleteNote(note.id)}>delete</button>
        </p>
      ))}
    </DivStyled>
  )
}
