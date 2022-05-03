import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border-radius: 3px;
  border-radius: 3px;
  color: ${(props) => (getSeconds() % 2 === 0 ? props.theme.main : '#369')};
  border: 2px solid ${(props) => props.theme.main};
`
// we ar passing a default theme for Buttons that arent wrapped in the ThemeProvider

Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
}

// defaine what props.theme will look

const theme = {
  main: 'mediumseagreen',
}

function getSeconds() {
  return new Date().getSeconds()
}

export default function App() {
  const [seconds, setSecond] = useState(getSeconds())

  useEffect(() => {
    console.log('%cuseEfeect run...', 'color: green;')

    const everyThreeSeconds = setTimeout(() => {
      setSecond(getSeconds())
    }, 3000)

    return () => {
      console.log('%ccleanup useEffect run...', 'color: red;')
      return clearTimeout(everyThreeSeconds)
    }
  })
  console.log('render App...')
  return (
    <div>
      <Button>Noraml</Button>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
        <h1>
          the seconds is:{' '}
          {seconds < 10 ? seconds.toString().padStart(2, '0') : seconds}
        </h1>
      </ThemeProvider>
    </div>
  )
}
