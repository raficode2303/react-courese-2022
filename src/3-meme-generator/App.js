import React, { useState } from 'react'
// style
import './App.css'
// components
import Header from './componenets/Header'
import Meme from './componenets/Meme'
import Image from './componenets/Image'
// memesData
import memesData from './memesData'

const App = () => {
  const [topText, setTopText] = useState()
  const [bottomText, setBottomText] = useState()
  return (
    <div className='app'>
      <h1>meme projects</h1>
      <Header />
      <Meme
        setTopText={setTopText}
        setBottomText={setBottomText}
        topText={topText}
        bottomText={bottomText}
      />
      <Image topText={topText} bottomText={bottomText} />
    </div>
  )
}

export default App
