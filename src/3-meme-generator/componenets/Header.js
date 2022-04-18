import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <img
        src='https://m.media-amazon.com/images/I/61lzojdhGEL._AC_SL1500_.jpg'
        alt='smiling mask img'
        className='header--image'
      />
      <h3 className='header--title'>Meme Generator</h3>

      <p className='header--project'>React Course - Project 3</p>
    </header>
  )
}
