//  put the logic in separate hook
import { useEffect, useContext } from 'react'
import { Context } from '../context'
// Helpers - sessionStorage
import { gtePlayersResults } from '../helpers'

// separate hooks

export const useHomeFetch = () => {
  const { state, setState, loading, setLoading, error, setError, checkIfWon } =
    useContext(Context)

  // CONST
  const URL =
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'

  const fetchRolls = async () => {
    setLoading(true)

    try {
      const response = await fetch(URL)
      console.log('response: ', response)
      const data = await response.json()
      console.log('data: ', data)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setState(state)
    } catch (error) {
      setError(true)
      console.log('Error!: ', error)
    } finally {
      setLoading(false)
    }
  }
  // initail and roll
  useEffect(() => {
    const sessionState = gtePlayersResults('playersState')
    console.log('sessionState: ', sessionState)

    if (sessionState) {
      console.log('Grabbing from session Storage')
      console.log('sessionState: ', sessionState)
      setState(sessionState)
      return
    }

    console.log('Grabbing from API')
    setState(state)
    // fetchRolls()
  }, [])

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('playersState', JSON.stringify(state))
  }, [])
  console.log('state at fetch: ', state)

  return {
    state,
    loading,
    error,
    checkIfWon,
  }
}
