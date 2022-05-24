import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const PreviewStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: aquamarine;
`
export const PreviewMarkDown = ({ currentNote }) => (
  <PreviewStyled className='item item3'>
    <h3>this is the preview</h3>
    <ReactMarkdown>{currentNote}</ReactMarkdown>
  </PreviewStyled>
)
