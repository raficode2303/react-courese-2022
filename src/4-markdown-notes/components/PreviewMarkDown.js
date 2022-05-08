import styled from 'styled-components'

const PreviewStyled = styled.div`
  background-color: aqua;
`
export const PreviewMarkDown = ({ newNote }) => (
  <PreviewStyled className='item item3'>
    <h3>this is the preview</h3>
    {console.log('preview new note:', newNote.message)}
    <p>{newNote?.message?.toUpperCase()}</p>
  </PreviewStyled>
)
