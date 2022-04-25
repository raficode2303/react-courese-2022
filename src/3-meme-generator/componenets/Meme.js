import React from 'react'

function Meme({ topText, bottomText, changeImage, setMeme }) {
  const handleChange = (e) => {
    // handle also with submit button! to change image
    e.preventDefault()
    const { name, value, type } = e.target
    console.log(name, value, type)
    setMeme((prevState) => ({
      ...prevState,
      [name]: type === 'submit' ? !changeImage : value,
    }))
  }

  const changeBackColor = (e) => {
    e.target.style.backgroundColor = '#369'
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
          name='topText'
          value={topText}
          placeholder='enter top sentence..'
          onChange={handleChange}
          onFocus={borderBlur}
        />
        <input
          type='text'
          name='bottomText'
          value={bottomText}
          placeholder='enter bottom sentence..'
          onFocus={borderBlur}
          onChange={handleChange}
        />
      </div>
      <button
        type='submit'
        name='changeImage'
        className='form-submit'
        onMouseEnter={changeBackColor}
        onClick={handleChange}
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
