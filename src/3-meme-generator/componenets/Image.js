import React, { useState } from 'react'
import memesData from '../memesData'

export default function Image({ topText, bottomText, changeImage }) {
  const [url, setUrl] = useState()
  React.useEffect(() => {
    const randomImage = Math.floor(Math.random() * memesData.data.memes.length)
    console.log(randomImage)
    const newUrl = memesData.data.memes[randomImage].url

    setUrl(newUrl)
  }, [changeImage])
  return (
    <div className='main-image'>
      <img src={url} alt='meme image' />
      <div className='topText'>{topText}</div>
      <div className='bottomText'>{bottomText}</div>
    </div>
  )
}
