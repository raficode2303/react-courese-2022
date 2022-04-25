import React, { useEffect, useState } from 'react'
// Local data
import memesData from '../memesData'
// API data come from parent componenet

const getRandomNumber = (memesLength) => Math.floor(Math.random() * memesLength)

export default function Image({
  topText,
  bottomText,
  changeImage,
  URL,
  randomNumber,
}) {
  console.log('randomNumber: ', randomNumber)
  const [memes, setMemes] = useState('')
  const [randomImageNumber, setRandomImageNumber] = useState(randomNumber)
  React.useEffect(() => {
    console.log('fetching start...')
    fetch(URL)
      .then((res) => res.json())
      .then((DATA) => {
        const { data } = DATA
        const { memes } = data
        setMemes(memes)
      })
      .catch((error) => console.log('there is error..', error))
      .finally(console.log('fetching end!'))
  }, [URL])

  React.useEffect(() => {
    memes && setRandomImageNumber(getRandomNumber(memes.length))
  }, [changeImage])

  console.log('randomImageNumber: ', randomImageNumber)
  return memes ? (
    <div className='main-image'>
      <img src={memes[randomImageNumber].url} alt='meme image' />
      <div className='topText'>{topText}</div>
      <div className='bottomText'>{bottomText}</div>
      <br />
      <small>{memes[randomImageNumber].name}</small>
    </div>
  ) : (
    <h2>Loading...</h2>
  )
}
