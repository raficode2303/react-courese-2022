import { useState } from 'react'
import styled from 'styled-components'

const DivStyled = styled.div`
  background-color: purple;
  height: 100vh;
  button {
    cursor: pointer;
    background-color: #369;
    font-size: 2rem;
    :hover {
      background-color: aqua;
    }
    :active {
      transform: scale(0.98);
    }
  }
`

export const SideBarNotes = ({ addNote, notes, showNote }) => {
  console.log('sidebar notes length', notes)
  return (
    <DivStyled className='item item1'>
      <h2>
        Notes
        <button className='add-note' onClick={addNote}>
          +
        </button>
      </h2>
      {notes?.map((note, index) => (
        <p key={note.id} onClick={() => showNote(note.id)}>
          Note{index + 1}
        </p>
      ))}
    </DivStyled>
  )
}
