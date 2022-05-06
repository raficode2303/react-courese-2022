import { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   body {
     background-color: #369;
   }
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palegoldenrod;
  background-color: papayawhip;
  border: none;
  border-radius: 3px;
`

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

// style objects
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px',
})

console.log('Box: ', Box.componentStyle.rules)
const BoxStyleRules = Box.componentStyle.rules
// Adapting based on props
const PropsBox = styled.div((props) => ({
  background: props.background,
  borderRadius: '50%',
  textAlign: 'center',
  height: '100px',
  width: '100px',
}))

function App() {
  const [seconds, setSecond] = useState(getSeconds())
  const inputRef = useRef()

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
      <Input
        ref={inputRef}
        placeholder='Hover Over Me'
        onMouseEnter={() => inputRef.current.focus()}
      />
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
      <h4 style={{ color: 'white' }}>
        {' '}
        Current theme: {JSON.stringify(theme)}
      </h4>
      <h2>Style Objects</h2>
      <Box>styled object</Box>
      <PropsBox
        background='blue'
        height='100px'
        width='100px'
        className={Box.styledComponentId}
      >
        styled object with props
      </PropsBox>
    </>
  )
}

export default App

function getSeconds() {
  return new Date().getSeconds()
}

// I am Noraml
