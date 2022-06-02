import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const PreviewStyled = styled.div`
  height: 100%;
  width: 100%;
`
export const PreviewMarkDown = ({ currentNote }) => {
  const item3Ref = useRef()
  useEffect(() => {
    item3Ref.current.parentElement.style.backgroundColor = 'aquamarine'
  }, [])

  return (
    <PreviewStyled className='item item3' ref={item3Ref}>
      <h3>this is the preview</h3>
      <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        {currentNote}
      </ReactMarkdown>
    </PreviewStyled>
  )
}
