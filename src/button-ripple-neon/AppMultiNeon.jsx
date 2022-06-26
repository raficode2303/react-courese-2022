import React from 'react'
import { getHexColor } from './helpers'
import { nanoid } from 'nanoid'
import styled, { createGlobalStyle } from 'styled-components'

console.log('hex:', getHexColor())
const colorNeon = 'hsl(317, 100%, 54%)'
const colorBg = 'hsl(323, 21%, 16%)'
// some fvaourite colors
const color1 = 'hsl(170, 100%, 78%)'
const color2 = 'hsl(78, 91%, 65%)'

const bgcolor3 = '#240253'
const olor3 = 'hsl(174, 92%, 66%)'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');

  :root {
    --clr-neon: ${colorNeon};
    --clr-bg: ${colorBg};
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Balsamiq Sans', cursive, sans-serif;
  }

  body {
  }
  `
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2px;
`
const ButtonWrapper = styled.div`
  min-height: 50vh;
  display: grid;
  place-items: center;
  --clr-bg: ${({ bgc }) => (bgc === true ? colorBg : bgc)};
  background-color: var(--clr-bg);
`
const ButtonNeon = styled.a`
  font-size: 4rem;

  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  --clr-neon: ${({ color }) => (color === true ? colorNeon : color)};
  color: var(--clr-neon);
  border: var(--clr-neon) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);

  position: relative;
  /* --start of of Duplicate Neon modal */

  span {
    position: absolute;
    top: 15%;
    left: 21%;
    right: 0;
    bottom: 0;
    /* overflow: hidden; */
  }
  /* --End of Duplicate Neon modal */

  ::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background-color: var(--clr-neon);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }

  ::after {
    content: '';
    position: absolute;
    /* makes frame like picture inside button */
    inset: 2px;
    box-shadow: 0 0 2em 0.5em var(--clr-neon);
    opacity: 0;
    background-color: var(--clr-neon);
    z-index: -1;
    transition: opacity 100ms linear;
  }

  :hover,
  :focus {
    color: var(--clr-bg);
    text-shadow: none;
    /* to animate shutting light add here: z-index: -1;*/
    z-index: 1;
    span {
      opacity: 0.2;
    }
    ::before,
    ::after {
      opacity: 1;
    }
  }
`

function App() {
  const NumberOfButtons = 10
  const Buttons = [...Array(NumberOfButtons - 1).keys()].map((_item) => (
    <ButtonWrapper key={nanoid()} bgc={getHexColor()}>
      <ButtonNeon color={getHexColor()} href='#'>
        Neon
        <span>Neon</span>
      </ButtonNeon>
    </ButtonWrapper>
  ))
  console.log('buttons:', Buttons)
  return (
    <>
      <GlobalStyle />
      <Container>
        <ButtonWrapper>
          <ButtonNeon href=''>
            Neon
            <span>Neon</span>
          </ButtonNeon>
        </ButtonWrapper>
        {Buttons}
      </Container>
    </>
  )
}

export default App
