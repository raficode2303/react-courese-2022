import { nanoid } from 'nanoid'
// this helper initial new game
export const getInitialState = () => {
  const firstRolls = getNewRolls()
  const newState = []
  for (let i = 0; i < 10; i++) {
    newState.push({
      id: nanoid(),
      diceNumber: firstRolls[i],
      isFixed: false,
    })
  }
  return newState
}

// this helper function return saved players and their results

export const gtePlayersResults = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName)
  console.log('JSON.parse(sessionState): ', JSON.parse(sessionState))
  return sessionState && JSON.parse(sessionState)
}

// this helper function brings random number between 1-6

export const getNewRolls = () => {
  let newRolls = []
  for (let i = 0; i < 10; i++) {
    newRolls.push(Math.floor(Math.random() * 6 + 1))
  }
  return newRolls
}
