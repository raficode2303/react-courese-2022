import React, { useState } from 'react'
// style
import './App.css'
// components
import Header from './componenets/Header'
import Meme from './componenets/Meme'
import Image from './componenets/Image'

const App = () => {
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [changeImage, setChangeImage] = useState(true)
  return (
    <div className='app'>
      <h1>meme projects</h1>
      <Header />
      <Meme
        setChangeImage={setChangeImage}
        topText={topText}
        bottomText={bottomText}
        setTopText={setTopText}
        setBottomText={setBottomText}
      />
      <Image
        topText={topText}
        bottomText={bottomText}
        changeImage={changeImage}
      />
    </div>
  )
}

export default App
