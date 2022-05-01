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
const SystemTheme = ({ toggleTheme }) => {
  return (
    <div>
      <Button data-theme='system' onClick={toggleTheme}>
        System
      </Button>
    </div>
  )
}

SystemTheme.propTypes = {
  toggleTheme: func.isRequired,
}

export default SystemTheme
