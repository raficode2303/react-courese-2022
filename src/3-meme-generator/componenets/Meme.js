import React from 'react'

function Meme({
  setChangeImage,
  topText,
  bottomText,
  setTopText,
  setBottomText,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('i was clicked', e.target.input)
    setChangeImage((prevState) => !prevState)
  }

  const topTextElememt = React.useRef()
  const bottomTextElememt = React.useRef()

  const changeBackColor = (e) => {
    console.log(e.target)
    e.target.style.backgroundColor = 'yellow'
  }

  const borderBlur = (e) => {
    console.log(e.target.style.border)
    e.target.style.border = '5px solid blue'
    e.target.style.backgroundColor = 'aqua'
    setTimeout(() => {
      e.target.style.border = ''
      e.target.style.backgroundColor = ''
    }, 1000)
  }
  return (
    <form className='form'>
      <div className='input-sentences'>
        <input
          type='text'
          placeholder='enter top sentence..'
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          onFocus={borderBlur}
        />
        <input
          type='text'
          placeholder='enter bottom sentence..'
          onFocus={borderBlur}
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <button
        type='submit'
        className='form-submit'
        onMouseEnter={changeBackColor}
        onClick={handleSubmit}
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
