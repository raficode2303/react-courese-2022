// this helper function brings random number between 1-6

export const gtePlayersResults = (stateNmae) => {
  const sessionState = sessionStorage.getItem(stateNmae)
  console.log('JSON.parse(sessionState): ', JSON.parse(sessionState))
  return sessionState && JSON.parse(sessionState)
}
