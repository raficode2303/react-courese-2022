import React from 'react'
// components
import { SearchBar } from './componants/SearchBar'
import { Products } from './componants/Products'
// global Context
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
      <SearchBar />
      <Products />
    </AppProvider>
  )
}

export default App
