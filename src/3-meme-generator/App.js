import React, { useState } from 'react'
// style
import './App.css'
// components
import Header from './componenets/Header'
import Meme from './componenets/Meme'
import Image from './componenets/Image'
// API URL
const URL = 'https://api.imgflip.com/get_memes'
const randomNumber = Math.floor(Math.random() * 33)
const App = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    changeImage: true,
  })

  return (
    <div className='app'>
      <h1>meme projects</h1>
      <Header />
      <Meme
        topText={meme.topText}
        bottomText={meme.bottomText}
        changeImage={meme.changeImage}
        setMeme={setMeme}
      />
      <Image
        topText={meme.topText}
        bottomText={meme.bottomText}
        changeImage={meme.changeImage}
        URL={URL}
        randomNumber={randomNumber}
      />
    </div>
  )
}

export default App
