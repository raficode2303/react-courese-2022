import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHeading,
  faBold,
  faItalic,
  faStrikethrough,
  faLink,
  faImage,
  faQuoteRightAlt,
  faCode,
  faListOl,
  faListDots,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons'

const WriteStyled = styled.div`
  height: 100%;
  .text-decoration {
    width: 50%;
    display: grid;
    justify-content: end;
    list-style: none;
    gap: 4px;
    grid-template-columns: repeat(4, 13%);
    padding: 5px;
  }
  textarea {
    resize: vertical;
    max-height: 100%;
    min-width: 98%;
    max-width: 100%;
    font-size: 2rem;
  }

  .fontAwesomeIcon {
    width: 2rem;
    min-width: fit-content;
    border-radius: 4px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .fontAwesomeIcon:hover {
    background-color: #ccc;
    color: rebeccapurple;
  }
  .fontAwesomeIcon:active {
    background-color: #cc2;
    color: green;
  }

  .border-inset {
    border-style: inset;
    color: #fff;
    background-color: rgba(0, 0, 255, 0.1);
  }
  label[for='important-note'] {
    font-size: 0.9rem;
    color: red;
  }
`
const defaultNote = '# Type your markdown note"s here'

export const WriteMarkDowon = ({
  currentNote,
  handleNewNote,
  boldText,
  setBoldText,
  noteName,
  setNoteName,
  setCurrentNote,
  isImportantNote,
  setIsImportantNote,
}) => {
  const item2Ref = useRef()

  useEffect(() => {
    item2Ref.current.parentElement.style.backgroundColor = 'aliceblue'
  }, [])

  const handleNoteName = (e) => {
    setNoteName(e.target.value)
  }

  const toggleOutset = (e) => {
    let textFeatureOff
    e.currentTarget.classList.toggle('border-inset')
    const isTextFeatureOn = e.currentTarget.classList.contains('border-inset')
    const textfeature = e.currentTarget.firstChild.classList[1]
    console.log(textfeature)
    switch (textfeature) {
      case 'fa-heading':
        if (isTextFeatureOn) setCurrentNote((prevNote) => `# ${prevNote}`)
        else {
          textFeatureOff = currentNote.split('# ')
          setCurrentNote(textFeatureOff.join(''))
        }
        break
      case 'fa-bold':
        if (isTextFeatureOn) setCurrentNote((prevNote) => `**${prevNote}**`)
        else {
          textFeatureOff = currentNote.split('**')
          setCurrentNote(textFeatureOff.join(''))
        }
        console.log('currentNote: ', currentNote)
        break
      case 'fa-italic':
        if (isTextFeatureOn) setCurrentNote((prevNote) => `_${prevNote}_`)
        else {
          textFeatureOff = currentNote.split('_')
          setCurrentNote(textFeatureOff.join(''))
        }
        break
      case 'fa-strikethrough':
        if (isTextFeatureOn) setCurrentNote((prevNote) => `~~${prevNote}~~`)
        else {
          textFeatureOff = currentNote.split('~~')
          setCurrentNote(textFeatureOff.join(''))
        }
        break

      case 'fa-link':
        // alert('fa-strikethrough')
        break
      case 'fa-quote-right':
        // alert('fa-strikethrough')
        break
      case 'fa-code':
        // alert('fa-strikethrough')
        break
      case 'fa-image':
        // alert('fa-strikethrough')
        break
      default:
        break
    }
  }
  return (
    <WriteStyled className='item item2' ref={item2Ref}>
      <ul className='text-decoration'>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faHeading}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faBold}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faItalic}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faStrikethrough}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faQuoteRightAlt}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faListDots}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
        </li>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
        </li>
      </ul>
      <input
        type='text'
        className='note-name'
        placeholder='Enter new Note Name..'
        value={noteName}
        onChange={handleNoteName}
      />
      <label htmlFor='important-note'>is important?</label>
      <input
        type='checkbox'
        name='important-note'
        id='important-note'
        checked={isImportantNote}
        onChange={() => setIsImportantNote((prevState) => !prevState)}
      />
      <textarea
        autoFocus
        name=''
        id=''
        cols='61'
        rows='15'
        onChange={handleNewNote}
        placeholder={defaultNote}
        value={currentNote}
      />
    </WriteStyled>
  )
}
