//  put the logic in separate hook
import { useState, useEffect } from 'react'
// Helpers - sessionStorage
import { gtePlayersResults } from '../helpers'

const initialState = {
  playerId: 0,
  name: 'default',
  results: [1, 2, 3, 4, 5, 6],
}
// separate hooks

export const useHomeFetch = ({ playerId, setPlayerId }) => {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // CONST
  const URL =
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'

  const fetchRolls = async (playerId) => {
    setLoading(true)
    setPlayerId(parseInt(playerId))

    try {
      const response = await fetch(URL)
      console.log('response: ', response)
      const data = await response.json()
      console.log('data: ', data)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setState((prev) => [...prev, data])
    } catch (error) {
      setError(true)
      console.log('Error!: ', error)
    } finally {
      console.log(`fetch for  playerId "${playerId}" ends!`)
      setLoading(false)
    }
  }
  // initail and roll
  useEffect(() => {
    if (playerId !== 0) {
      const sessionState = gtePlayersResults('playersState')
      console.log('sessionState: ', sessionState)

      if (sessionState) {
        console.log('Grabbing from session Storage')
        setState(sessionState)
        return
      }
    }
    console.log('Grabbing from API')
    setState([initialState])
    fetchRolls(initialState.playerId)
  }, [playerId])

  // Write to sessionStorage
  useEffect(() => {
    if (!playerId) sessionStorage.setItem('playersState', JSON.stringify(state))
  }, [playerId, state])
  console.log('state at fetch: ', state)

  return {
    state,
    loading,
    error,
    playerId,
    setPlayerId,
  }
}
