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
  background-color: aliceblue;
`
const defaultNote = '# Type your markdown note"s here'

export const WriteMarkDowon = ({
  currentNote,
  handleNewNote,
  boldText,
  setBoldText,
}) => {
  const toggleOutset = (e) => {
    // e.target.classList.toggle('border-inset')
    console.log(e.target.classList)
    if (e.target.classList.contains('bold')) {
      setBoldText((prevState) => !prevState)
    }
  }
  return (
    <WriteStyled className='item item2'>
      <ul className='text-decoration'>
        <li className='fontAwesomeIcon' onClick={toggleOutset}>
          <FontAwesomeIcon icon={faHeading}></FontAwesomeIcon>
        </li>
        <li
          className={`fontAwesomeIcon bold ${boldText ? 'border-inset' : ''}`}
          onClick={toggleOutset}
        >
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
      <textarea
        name=''
        id=''
        cols='37'
        rows='20'
        onChange={handleNewNote}
        placeholder={defaultNote}
        value={currentNote}
      />
    </WriteStyled>
  )
}
