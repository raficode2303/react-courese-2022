import React from 'react'
import memesData from '../memesData'

export default function Image({ topText, bottomText }) {
  const randomImage = Math.floor(Math.random() * memesData.data.memes.length)
  console.log(randomImage)
  return (
    <div className='main-image'>
      <img src={memesData.data.memes[randomImage]?.url} alt='meme image' />
      <div className='topText'>{topText}</div>
      <div className='bottomText'>{bottomText}</div>
    </div>
  )
}
