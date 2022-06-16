import React, { useState, createContext } from 'react'
import { getNewRolls, getInitialState } from './helpers'
import { nanoid } from 'nanoid'

export const Context = createContext()

const UserProvider = ({ children }) => {
  const [state, setState] = useState(() => getInitialState())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [rollToggle, setRollToggle] = useState(false)
  const [checkIfWon, setCheckIfWon] = useState(false)

  return (
    <Context.Provider
      value={{
        state,
        setState,
        loading,
        setLoading,
        error,
        setError,
        rollToggle,
        setRollToggle,
        checkIfWon,
        setCheckIfWon,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default UserProvider
