import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`
const Toggle = ({ theme, toggleTheme, systemThemeOn }) => {
  return (
    <div>
      <span>Light</span>
      <div onClick={toggleTheme}>
        <Button />
      </div>
      <span>Dark</span>
    </div>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  systemThemeOn: string.isRequired,
}

export default Toggle
