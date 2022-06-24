import React, { useState } from 'react'
import {
  Wrapper,
  Button,
  GlobalStyle,
  ButtonNeon,
} from './ButtonRippleNeon.styles'

function App() {
  const [isClicked, setIsClicked] = useState(() => false)
  const [toogleRipple, setToogleRipple] = useState(() => false)
  const [ripplePosition, setRipplePosition] = useState({
    xPos: 0,
    yPos: 0,
  })

  const ActiveRippleEffect = (e) => {
    setIsClicked(true)
    setRipplePosition({
      xPos: e.clientX - e.target.offsetLeft,
      yPos: e.clientY - e.target.offsetTop,
    })
    setToogleRipple((prev) => !prev)
  }
  React.useEffect(() => {
    const time = setTimeout(() => {
      setIsClicked(false)
    }, 600)
    return () => clearTimeout(time)
  }, [toogleRipple])
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Button>hover</Button>
        <Button
          isClicked={isClicked}
          onClick={ActiveRippleEffect}
          xPos={ripplePosition.xPos}
          yPos={ripplePosition.yPos}
        >
          Click Me!
        </Button>
      </Wrapper>
      <p>hover: Flash Effect!</p>
      <p>click: Ripple Effect!</p>
      <hr />
      <section>
        <ButtonNeon href='#home3'>
          Neon
          <span>Neon</span>
        </ButtonNeon>
      </section>
    </>
  )
}

export default App
