import styled from 'styled-components'

const PreviewStyled = styled.div`
  background-color: aqua;
`
export const PreviewMarkDown = ({ currentNote }) => (
  <PreviewStyled className='item item3'>
    <h3>this is the preview</h3>
    {console.log('preview new note:', currentNote)}
    <p>{currentNote?.toUpperCase()}</p>
  </PreviewStyled>
)
