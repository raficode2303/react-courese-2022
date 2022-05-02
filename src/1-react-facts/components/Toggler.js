import React from 'react'
import { func, string, bool } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid
    ${({ theme }) => {
      return theme.text
    }};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`
const Toggle = ({ theme, toggleTheme, systemThemeOn }) => {
  console.log('Toggle', theme, systemThemeOn)
  return (
    <div>
      <span style={{ color: theme === 'light' ? 'black' : 'grey' }}>Light</span>
      <div onClick={toggleTheme}>
        <Button style={{ borderColor: systemThemeOn ? '' : 'yellow' }} />
      </div>
      <span style={{ color: theme === 'dark' ? 'white' : 'grey' }}>Dark</span>
    </div>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  systemThemeOn: bool.isRequired,
}

export default Toggle
