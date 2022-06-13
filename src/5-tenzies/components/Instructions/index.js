import React from 'react'
import { Wrapper, Content } from './Instructions.styles'

const Instructions = () => {
  return (
    <Wrapper>
      <Content>
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </Content>
    </Wrapper>
  )
}

export default Instructions
