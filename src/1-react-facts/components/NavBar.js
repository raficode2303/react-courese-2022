import React from 'react'
import logo from '../../logo512.png'
import Toggle from './Toggler'
import SystemTheme from './SystemTheme'

export const NavBar = ({ theme, toggleTheme, systemThemeOn }) => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='react-logo-atom-symbol' className='nav--icon' />
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
      <Toggle
        theme={theme}
        toggleTheme={toggleTheme}
        systemThemeOn={systemThemeOn}
      />
      <SystemTheme toggleTheme={toggleTheme} />
    </nav>
  )
}
