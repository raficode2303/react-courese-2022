import React from 'react'
import { func, string, bool } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`
const SystemTheme = ({ toggleTheme, theme, systemThemeOn }) => {
  return (
    <div>
      <Button
        data-theme='system'
        style={{ borderColor: systemThemeOn ? 'yellow' : '' }}
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
  systemThemeOn: bool.isRequired,
}

export default SystemTheme
