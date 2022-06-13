import React from 'react'
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Header from './components/Header'
import Home from './components/Home'
import Player from './components/Player'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Spinner from './components/Spinner'
// Styles
import { GlobalStyle } from './GlobalStyle'
// Context
import UserProvider from './context'

const App = () => (
  <Router className='App'>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/:userId' element={<Player />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {/* <Spinner /> */}
      <GlobalStyle />
    </UserProvider>
  </Router>
)

export default App
