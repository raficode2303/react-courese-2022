import React, { useEffect, useState } from 'react'
/* styles */
import './App.css'

/* COMPONENTS */
import { NavBar } from './components/NavBar'
import MainContent from './components/MainContent'

/* using  sytled-components */
import { ThemeProvider } from 'styled-components'
import useDarkMode from './components/useDarkMode'
import { GlobalStyles } from './components/GlobalStyles'
import { lightMode, darkMode } from './components/Themes'

function App() {
  const [theme, themeToggler, mountedComponent, systemThemeOn] = useDarkMode()
  // styled components //
  const themeMode = theme === 'light' ? lightMode : darkMode

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className='app'>
        <NavBar
          theme={theme}
          toggleTheme={themeToggler}
          systemThemeOn={systemThemeOn}
        />
        <hr />
        <MainContent />
      </div>
    </ThemeProvider>
  )
}

export default App
