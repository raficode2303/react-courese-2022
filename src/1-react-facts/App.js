import React, { useState } from 'react'
/* styles */
import './App.css'

/* COMPONENTS */
import { NavBar } from './components/NavBar'
import MainContent from './components/MainContent'

const changeThemeToDark = () => {
  console.log('changing theme to dark')
  document.documentElement.setAttribute(
    'style',
    '--navbarbgcolor: #21222a;--mainbgcolor: #282d35;--maincolor: #fff;--lightcolor: #fff;--darkcolor: #000;'
  )
}

const changeThemeToLight = () => {
  console.log('changing theme to light')
  document.documentElement.setAttribute(
    'style',
    '--navbarbgcolor: #fff;--mainbgcolor: #fff;--maincolor: #000;--lightcolor: #fff;--darkcolor: #000;'
  )
}
function App() {
  const [themeButton, setThemeButton] = useState('auto')
  const [theme, setTheme] = React.useState('')

  function updateTheme(e) {
    console.log('e of changing syatem theme: ', e)
    setThemeButton('auto')
    if (e.matches) {
      // theme is dark
      setTheme('dark')
      changeThemeToDark()
    } else {
      // theme is light
      setTheme('light')
      changeThemeToLight()
    }
  }

  React.useEffect(() => {
    console.log('%crun useEfeect of App', 'color: green')
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

    // watch for updates

    updateTheme(darkThemeMq)
    // listen when theme change by system
    darkThemeMq.addEventListener('change', updateTheme)
    // clean up after ourseelves
    return function cleanup() {
      console.log('%crun useEfeect claenup of App...', 'color: red')
      darkThemeMq.removeEventListener('change', updateTheme)
    }
  }, [])

  console.log('theme: ', theme)
  return (
    <div className='app'>
      <NavBar
        theme={theme}
        setTheme={setTheme}
        themeButton={themeButton}
        setThemeButton={setThemeButton}
        changeThemeToLight={changeThemeToLight}
        changeThemeToDark={changeThemeToDark}
        updateTheme={updateTheme}
      />
      <hr />
      <MainContent />
    </div>
  )
}

export default App
