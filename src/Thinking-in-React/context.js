import { useContext, createContext, useState } from 'react'

// data
import data from './data'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [searchValue, setSearchValue] = useState('')
  const [ShowOnlyInStock, setShowOnlyInStock] = useState(false)
  const [products, setProducts] = useState(data)

  const value = {
    searchValue,
    ShowOnlyInStock,
    products,
    data,
    setSearchValue,
    setShowOnlyInStock,
    setProducts,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// context consumer hook
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext was used outside of its Provider')
  }

  return context
}
