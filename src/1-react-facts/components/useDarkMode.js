import { useEffect, useState } from 'react'

const localThemeReact = 'local-theme-react'

const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
}
function useDarkMode() {
  const [theme, setTheme] = useState('light')
  const [mountedComponenet, setMountedComponenet] = useState(false)
  const [systemThemeOn, setSystemThemeOn] = useState(false)
  const [systemDarkTheme, setSystemDarkTheme] = useState(false)

  const setMode = (mode) => {
    window.localStorage.setItem(localThemeReact, mode)
    setTheme(mode)
  }

  const setSystemTheme = (e) => {
    const {
      target: { matches },
    } = e
    console.log('systemThemeOn: ', systemThemeOn)
    if (!systemThemeOn) return
    console.log('setSystemDarkTheme TO: ---!!', matches)

    setSystemDarkTheme((prevState) => matches)
  }

  const themeToggler = (e) => {
    let newTheme
    if (e === 'auto') {
      newTheme = getSystemTheme().matches ? 'dark' : 'light'
      console.log('----auto system theme OS option---')
    } else if (e.target.dataset.theme === 'system') {
      console.log('----system button option---')
      newTheme = getSystemTheme().matches ? 'dark' : 'light'
      !systemThemeOn && setSystemThemeOn((prevState) => true)
    } else {
      console.log('----toggle button option---')
      newTheme = theme === 'light' ? 'dark' : 'light'
      setSystemThemeOn((prevState) => false)
    }
    setMode(newTheme)
  }
  useEffect(() => {
    console.log('%crun useEfeect of useDarkMode...', 'color: orange')
    const localTheme = window.localStorage.getItem(localThemeReact)
    localTheme ? setTheme(localTheme) : setMode('light')
    setMountedComponenet(true)

    const darkThemeMq = getSystemTheme()
    console.log('darkThemeMq: ', darkThemeMq)
    darkThemeMq.addEventListener('change', setSystemTheme)

    return () => darkThemeMq.removeEventListener('cahnge', setSystemTheme)
  }, [])

  useEffect(() => {
    console.log('useEffect of darkThemeMq')
    if (systemThemeOn) {
      themeToggler('auto')
    }
  }, [systemDarkTheme])
  // clean up
  return [theme, themeToggler, mountedComponenet, systemThemeOn]
}

export default useDarkMode
