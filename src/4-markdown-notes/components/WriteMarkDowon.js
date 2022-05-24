import styled from 'styled-components'

const WriteStyled = styled.div`
  background-color: #ffffffcc;
`
const defaultNote = '# Type your markdown note"s here'

export const WriteMarkDowon = ({ currentNote, handleNewNote }) => {
  return (
    <WriteStyled className='item item2'>
      <ul className='text-decoration'>
        <li>H</li>
        <li>B</li>
        <li className='shifted'>I</li>
        <li style={{ textDecoration: 'line-through' }}>S</li>
        <li>&#x1F517;</li>
        <li>&#10080;</li>
        <li>{'</>'}</li>
        <li className='image-text'>🖼</li>
        <li>📝</li>
        <li>🔢</li>
        <li>📅</li>
      </ul>
      <textarea
        name=''
        id=''
        cols='70'
        rows='20'
        onChange={handleNewNote}
        placeholder={defaultNote}
        value={currentNote}
      />
    </WriteStyled>
  )
}
