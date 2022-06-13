import React from 'react'

// Components
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import Instructions from './Instructions'

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
// UNIQUE KEY
import { nanoid } from 'nanoid'

const Home = () => {
  const [playerId, setPlayerId] = React.useState(0)
  const { state, loading, error } = useHomeFetch({
    playerId,
    setPlayerId,
  })
  console.log(
    'state loading error player and setPlayerId at useHomeFetch: ',
    state,
    loading,
    error,
    playerId,
    setPlayerId
  )
  if (error) return <div>Something went Wrong...</div>
  console.log('state and playerId at Home: ', state, playerId)
  return (
    <>
      <Instructions />
      {state ? (
        <>
          {console.log('state[playerId]: ', state[playerId], playerId)}
          <h3>Rolls for Player: {state[playerId].name}</h3>
          <Grid>
            {state[playerId].results.map((result) => {
              const nanoKey = nanoid()
              return <Thumb key={nanoKey} clickable resultId={result} />
            })}
          </Grid>
        </>
      ) : (
        <Spinner />
      )}

      {loading && <Spinner />}
    </>
  )
}

export default Home
