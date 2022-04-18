import React from 'react'

function Meme() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('i was clicked')
  }

  const changeBackColor = (e) => {
    console.log(e.target)
    e.target.style.backgroundColor = 'yellow'
  }
  return (
    <form className='form'>
      <div className='input-sentences'>
        <input type='text' placeholder='enter top sentence..' />
        <input type='text' placeholder='enter bottom sentence..' />
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
