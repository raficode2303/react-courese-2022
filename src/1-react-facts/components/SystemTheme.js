import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.6rem;
`
const SystemTheme = ({ toggleTheme, theme, systemThemeOn }) => {
  return (
    <div>
      <Button
        data-theme='system'
        style={{ borderColor: systemThemeOn === 'on' ? 'yellow' : '' }}
        onClick={toggleTheme}
      >
        System
      </Button>
    </div>
  )
}

SystemTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  systemThemeOn: string.isRequired,
}

export default SystemTheme
