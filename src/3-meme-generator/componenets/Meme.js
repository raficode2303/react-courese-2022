import React from 'react'

function Meme({ setTopText, setBottomText }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('i was clicked', e.target.input)
    setTopText(topTextElememt.current.value)
    setBottomText(bottomTextElememt.current.value)
  }

  const topTextElememt = React.useRef()
  const bottomTextElememt = React.useRef()

  const changeBackColor = (e) => {
    console.log(e.target)
    e.target.style.backgroundColor = 'yellow'
  }
  return (
    <form className='form'>
      <div className='input-sentences'>
        <input
          type='text'
          placeholder='enter top sentence..'
          ref={topTextElememt}
        />
        <input
          type='text'
          placeholder='enter bottom sentence..'
          ref={bottomTextElememt}
        />
      </div>
      <button
        type='submit'
        className='form-submit'
        onClick={handleSubmit}
        onMouseEnter={changeBackColor}
      >
        Get new meme image
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/71sKzRQtXtL.png'
          alt='pictire-img'
          className='submit-image'
        />
      </button>
    </form>
  )
}

export default Meme
