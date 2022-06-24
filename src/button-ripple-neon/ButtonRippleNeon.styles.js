import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --mainColor: #645cff80;
    --secondColor: #645cff;
    --rippleWidth: 100%;
    --rippleHeight:100%;
    --rippleOpacity: 1;

    --clr-neon: rgb(212, 36, 186);
    --clr-bg-neon: hsl(323, 21%, 16%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;

  }

  body {
    font-family: 'Balsamiq Sans', cursive, sans-serif;
  }

  section {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: var(--clr-bg-neon);
    z-index: 1;
  }

  @keyframes ripple {
    from {
      opacity: 1;
      border: none;
    }
    to {
      transform: scale(700);
      opacity: 0.2;
      border: none;
    }
  }
`

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 3rem;
  outline: 20px inset green;
  border-radius: 3px;
  overflow: hidden;
`
export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  color: var(--mainColor);
  border: 1px solid var(--mainColor);
  border-radius: 0.25rem;
  text-transform: capitalize;
  font-size: 2rem;
  letter-spacing: 2px;
  background-color: transparent;
  transition: 0.5s ease-in-out;

  :hover {
    box-shadow: 0 0 0 2rem var(--mainColor) inset;
    color: #fff;
  }
  ::before {
    content: '';
    position: absolute;
    top: ${({ yPos }) => `${yPos}px`};
    left: ${({ xPos }) => `${xPos}px`};
    z-index: -999;
    background-color: rgba(255, 255, 0, 0.5);
    /* border: 1px solid red; */
    width: 1px;
    height: 1px;
    border: 1px solid red;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    animation: ${(props) =>
      props.isClicked ? 'ripple 0.6s linear infinite' : 'none'};
  }
`

export const ButtonNeon = styled.a`
  font-size: 4rem;

  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-neon);
  border: var(--clr-neon) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);

  position: relative;
  /* --start of this for modal */
  span {
    position: absolute;
    top: 15%;
    left: 21%;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  /* --End of this for modal */

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
    filter: blur(1.3em);
    opacity: 0.7;
  }

  ::after {
    content: '';
    position: absolute;
    inset: 2px;
    box-shadow: 0 0 2em 0.5em var(--clr-neon);
    opacity: 0;
    background-color: var(--clr-neon);
    z-index: -1;
    transition: opacity 100ms linear;
  }
  :hover,
  :focus {
    color: var(--clr-bg-neon);
    text-shadow: none;
    z-index: 1;
  }
  :hover::before,
  :focus::before,
  :hover::after,
  :focus::after {
    opacity: 1;
  }
`
/**
 credit:
  1. https://twitter.com/john_smilga?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor

  2. https://www.youtube.com/watch?v=ueyRcYEmsrI

  3. https://www.youtube.com/watch?v=6xNcXwC6ikQ

 twitter:
 Marko ⚡ Denic @denicmarko

Learn for free:

HTML: http://html.com
CSS: http://web.dev/learn/css
JavaScript: http://javascript.info
React: http://react-tutorial.app
Vue: http://learnvue.co
Git: http://git-scm.com/book
Web3: http://learnweb3.io
Python: http://learnpython.org
 */
