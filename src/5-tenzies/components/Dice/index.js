import React, { useEffect } from 'react'
// styles
import { Image } from './Dice.styles'
// Link
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { getNewRolls } from '../../helpers'
import { Context } from '../../context'

const DICEIMAGES = [
  undefined,
  'https://upload.wikimedia.org/wikipedia/commons/0/09/Dice-1.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/34/Dice-2.svg',
  'https://upload.wikimedia.org/wikipedia/commons/c/ca/Dice-3.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/16/Dice-4.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/dc/Dice-5.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/14/Dice-6.svg',
]

const Dice = ({ clickable, id, diceNumber, isFixed }) => {
  const { rollToggle, setState } = React.useContext(Context)
  let image = DICEIMAGES[diceNumber]
  console.log('id: ', id)
  useEffect(() => {
    if (!isFixed)
      setState((prevState) =>
        prevState.map((dice) =>
          dice.isFixed ? dice : { ...dice, diceNumber: getNewRolls()[0] }
        )
      )
  }, [rollToggle])

  const handleDiceFixed = (e) => {
    setState((prevState) =>
      prevState.map((dice) =>
        dice.id !== id ? dice : { ...dice, isFixed: !dice.isFixed }
      )
    )
  }
  return (
    <div>
      {clickable ? (
        <Image
          src={DICEIMAGES[diceNumber]}
          bckColor={isFixed ? '#59e391' : 'gray'}
          alt={`result-dice-${diceNumber}`}
          onClick={handleDiceFixed}
        />
      ) : (
        <Image
          src={image}
          alt={`result-dice-${diceNumber}`}
          onClick={handleDiceFixed}
        />
      )}
    </div>
  )
}

Dice.propTypes = {
  clickable: PropTypes.bool,
}

export default Dice
