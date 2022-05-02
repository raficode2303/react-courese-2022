import { useEffect, useState } from 'react'

const localThemeReact = 'local-theme-react'

const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
}
function useDarkMode() {
  const [theme, setTheme] = useState('light')

  const [mountedComponenet, setMountedComponenet] = useState(false)
  const [systemThemeOn, setSystemThemeOn] = useState(false)
  const [systemDarkTheme, setSystemDarkTheme] = useState(
    getSystemTheme().matches
  )

  console.log('%cset systemThemeOn to off==>', 'border: 2px solid red')

  const setMode = (mode) => {
    window.localStorage.setItem(localThemeReact, mode)
    setTheme(mode)
  }

  const setSystemTheme = (isDark) => {
    if ((!isDark && theme === 'dark') || (isDark && theme === 'light')) {
      setSystemDarkTheme(isDark)
    }
  }

  const themeToggler = (e) => {
    let newTheme
    console.log('e theme systemThemeOn: ', e, theme, systemThemeOn)
    if (e === 'auto') {
      if (systemThemeOn === 'off') return
      newTheme = getSystemTheme().matches ? 'dark' : 'light'
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
    darkThemeMq.addEventListener('change', setSystemTheme)

    return () => darkThemeMq.removeEventListener('cahnge', setSystemTheme)
  }, [])

  useEffect(() => {
    // listen when theme change by system
    console.log('useEffect of darkThemeMq')
    const darkThemeMq = getSystemTheme()
    const currentSystemTheme = darkThemeMq.matches ? 'dark' : 'light'
    if (systemThemeOn === 'on' && theme != currentSystemTheme) {
      themeToggler('auto')
    }
  }, [systemDarkTheme])
  // clean up
  return [theme, themeToggler, mountedComponenet, systemThemeOn]
}

export default useDarkMode
