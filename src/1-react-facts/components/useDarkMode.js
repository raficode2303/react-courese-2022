import { useEffect, useState } from 'react'

const localThemeReact = 'local-theme-react'

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)')
}
function useDarkMode() {
  const [theme, setTheme] = useState('light')
  const [mountedComponenet, setMountedComponenet] = useState(false)
  console.log('%cset systemThemeOn to off==>', 'border: 2px solid red')
  const [systemThemeOn, setSystemThemeOn] = useState('off')

  const setMode = (mode) => {
    window.localStorage.setItem(localThemeReact, mode)
    setTheme(mode)
  }

  const themeToggler = (e) => {
    const { type } = e
    let newTheme
    console.log('type systemThemeOn theme: ', type, systemThemeOn, theme)
    if (type === 'change') {
      if (systemThemeOn === 'off') return
      newTheme = e.target.matches ? 'dark' : 'light'
      console.log('currentSystemTheme: ', newTheme)
    } else if (e.target.dataset.theme === 'system') {
      newTheme = getSystemTheme().matches ? 'dark' : 'light'
      console.log('make systemThemeOn ON!!')
      setSystemThemeOn('on')
    } else {
      newTheme = theme === 'light' ? 'dark' : 'light'
      console.log('make systemThemeOn OFF!!')
      setSystemThemeOn('off')
    }
    setMode(newTheme)
  }
  useEffect(() => {
    console.log('%crun useEfeect of useDarkMode...', 'color: orange')
    const localTheme = window.localStorage.getItem(localThemeReact)
    localTheme ? setTheme(localTheme) : setMode('light')
    setMountedComponenet(true)
    const darkThemeMq = getSystemTheme()
    // listen when theme change by system
    darkThemeMq.addEventListener('change', themeToggler)
    return function cleanup() {
      console.log('%crun useEfeect claenup of useDarkMode...', 'color: red')
      darkThemeMq.removeEventListener('change', themeToggler)
    }

    // clean up
  }, [])
  console.log('ts====', theme, systemThemeOn)
  return [theme, themeToggler, mountedComponenet, systemThemeOn]
}

export default useDarkMode
