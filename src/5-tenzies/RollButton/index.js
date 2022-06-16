import { useContext, useEffect, useState } from 'react'
import { Wrapper, Content } from './RollButton.styles'
import { Context } from '../context'
// helpers
import { getInitialState } from '../helpers'

const RollButton = () => {
  const { setRollToggle, state, setState, checkIfWon, setCheckIfWon } =
    useContext(Context)

  useEffect(() => {
    setCheckIfWon(
      state.every(
        (dice) => dice.isFixed && state[0].diceNumber === dice.diceNumber
      )
    )
  }, [state])

  return (
    <Wrapper>
      <Content
        onClick={() => {
          if (checkIfWon) {
            setState(() => getInitialState())
          } else {
            setRollToggle((prevState) => !prevState)
          }
        }}
        checkIfWon={checkIfWon}
      >
        {checkIfWon ? 'New Game!' : 'Roll'}
      </Content>
    </Wrapper>
  )
}

export default RollButton
