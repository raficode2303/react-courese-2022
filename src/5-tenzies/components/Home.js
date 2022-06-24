import React, { useContext } from 'react'

// Components
import Grid from './Grid'
import Dice from './Dice'
import Spinner from './Spinner'
import Instructions from './Instructions'
import RollButton from '../RollButton'

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch'

import { Context } from '../context'
import Confetti from 'react-confetti'

const Home = () => {
  const { error, state, loading, checkIfWon } = useContext(Context)
  if (error) return <div>Something went Wrong...</div>
  return (
    <>
      <Instructions />
      {checkIfWon && <Confetti />}
      {state ? (
        <>
          <h3>Player Name: {state[0].position || 'Anonymous'}</h3>
          <Grid>
            {state.map((dice, index) => {
              console.log('dice: ', dice)
              return (
                <Dice
                  key={dice.id}
                  id={dice.id}
                  clickable
                  isFixed={dice.isFixed}
                  diceNumber={dice.diceNumber}
                />
              )
            })}
          </Grid>
          <RollButton />
        </>
      ) : (
        <Spinner />
      )}

      {loading && <Spinner />}
    </>
  )
}

export default Home
