// import React from 'react'
import logo from '../logo.svg'

export const HeaderPractice = () => {
  return (
    <header className='header-p'>
      <nav className='nav-p'>
        <img src={logo} alt='react-logo' className='nav-logo-p' />
        <ul className='nav-items-p'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
