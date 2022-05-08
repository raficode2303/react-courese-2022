import styled from 'styled-components'

const WriteStyled = styled.div`
  background-color: #ffffffcc;
`
export const WriteMarkDowon = ({ newNote, handleNewNote }) => {
  return (
    <WriteStyled className='item item2'>
      <textarea
        name=''
        id=''
        cols='10'
        rows='10'
        onChange={handleNewNote}
        value={newNote?.message}
      />
    </WriteStyled>
  )
}
