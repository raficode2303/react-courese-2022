import { useEffect, useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const Button = styled.button`
  color: ${(props) =>
    getSeconds() % 2 === 0 ? props.theme.fg : props.theme.bg};
  border: 2px solid
    ${(props) => (getSeconds() % 2 === 0 ? props.theme.bg : props.theme.fg)};
  background-color: ${(props) =>
    getSeconds() % 2 === 0 ? props.theme.bg : props.theme.fg};

  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border-radius: 3px;
`
// we ar passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
}

// defaine what props.theme will look
const theme = {
  fg: 'palevioletred',
  bg: 'white',
}

// this theme swaps 'fg' and 'bg'
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

const GlobalStyles = createGlobalStyle`
   body {
     background-color: #369;
   }
`

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
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div>
          <Button>default theme</Button>
          <ThemeProvider theme={invertTheme}>
            <Button>inverted theme</Button>
          </ThemeProvider>
        </div>
        <Button theme={{ ...theme, bg: 'aqua' }}>Overriden</Button>
      </ThemeProvider>
      <Button theme={{ bg: 'yellow', fg: 'purple' }}>Ad hoc theme</Button>
      <h1>
        the seconds is:{' '}
        {seconds < 10 ? seconds.toString().padStart(2, '0') : seconds}
      </h1>
      <h4> {console.log('Current theme: ', theme)}</h4>
    </>
  )
}

function getSeconds() {
  return new Date().getSeconds()
}

// I am Noraml
