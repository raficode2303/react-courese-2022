import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const PreviewStyled = styled.div`
  background-color: aqua;
`
export const PreviewMarkDown = ({ currentNote }) => (
  <PreviewStyled className='item item3'>
    <h3>this is the preview</h3>
    <ReactMarkdown>{currentNote?.toUpperCase()}</ReactMarkdown>
  </PreviewStyled>
)
