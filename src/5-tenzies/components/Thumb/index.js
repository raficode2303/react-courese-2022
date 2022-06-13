import React from 'react'
// styles
import { Image } from './Thumb.styles'
// Link
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const DICE = [
  undefined,
  'https://upload.wikimedia.org/wikipedia/commons/0/09/Dice-1.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/34/Dice-2.svg',
  'https://upload.wikimedia.org/wikipedia/commons/c/ca/Dice-3.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/16/Dice-4.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/dc/Dice-5.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/14/Dice-6.svg',
]

const Thumb = ({ resultId, clickable }) => {
  const image = DICE[resultId]
  return (
    <div>
      {clickable ? (
        <Link to={`/${resultId}`}>
          <Image src={image} alt={`result-thumb-dice-${resultId}`} />
        </Link>
      ) : (
        <Image src={image} alt={`result-thumb-dice-${resultId}`} />
      )}
    </div>
  )
}

Thumb.propTypes = {
  image: PropTypes.string,
  resultId: PropTypes.number,
  clickable: PropTypes.bool,
}

export default Thumb
