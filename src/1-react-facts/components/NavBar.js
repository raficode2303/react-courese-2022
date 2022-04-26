import React from 'react'
import logo from '../../logo512.png'

const themeOptions = {
  LIGHT: 'light',
  AUTO: 'auto',
  DARK: 'dark',
}

export const NavBar = ({
  theme,
  setTheme,
  themeButton,
  setThemeButton,
  changeThemeToLight,
  changeThemeToDark,
  updateTheme,
}) => {
  const [buttonDirection, setButtonDirection] = React.useState('right')
  const themeChange = () => {
    switch (themeButton) {
      case 'auto':
        if (buttonDirection === 'right') {
          setTheme(themeOptions.DARK)
          setThemeButton(themeOptions.DARK)
          setButtonDirection('left')
          changeThemeToDark()
        } else {
          setTheme(themeOptions.LIGHT)
          setThemeButton(themeOptions.LIGHT)
          setButtonDirection('right')
          changeThemeToLight()
        }
        break
      case 'light':
      case 'dark':
      default:
        setThemeButton(themeOptions.AUTO)
        updateTheme(window.matchMedia('(prefers-color-scheme: dark)'))
    }
  }

  React.useEffect(() => {}, [theme])
  return (
    <nav className='navbar'>
      <img src={logo} alt='react-logo-atom-symbol' className='nav--icon' />
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
      <div className='theme-container'>
        <span
          className={
            theme === 'light' ? 'light-on theme-option' : 'grey theme-option'
          }
          onClick={() => {
            if (themeButton === 'light') return
            setTheme(themeOptions.LIGHT)
            setThemeButton(themeOptions.LIGHT)
            changeThemeToLight()
            setButtonDirection('right')
          }}
        >
          Light
        </span>
        <div
          className={`theme-mode ${theme === 'light' ? 'dark' : 'light'}`}
          onClick={themeChange}
        >
          <button
            className={`
            ${themeButton} theme-mode--button
            `}
            data-theme={themeButton}
          ></button>
        </div>
        <span
          className={
            theme === 'dark' ? 'dark-on theme-option' : 'grey theme-option'
          }
          onClick={() => {
            if (themeButton === 'dark') return
            setTheme(themeOptions.DARK)
            setThemeButton(themeOptions.DARK)
            changeThemeToDark()
            setButtonDirection('left')
          }}
        >
          Dark
        </span>
      </div>
    </nav>
  )
}
