import React from 'react'
import WindowTracker from './WindowTracker'
// styled components
import styled from 'styled-components'

const MainApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  border: 2px solid red;
  background-color: orange;
  height: 100vh;
`
const ContentApp = styled.div`
  background-color: aqua;
`
const Button = styled.button`
  background-color: #fff;
  color: black;
  font-size: xx-large;
  font-weight: 700;
  border-radius: 5px;
  border: 2px solid #fff;
  padding: 1rem;

  :hover {
    color: white;
    background-color: #369;
  }
  :active {
    background-color: purple;
    color: green;
  }
`

function App() {
  const [showWindow, setShowWindow] = React.useState(true)
  const toggle = () => {
    setShowWindow((prevState) => !prevState)
  }
  return (
    <MainApp className='app'>
      <Button onClick={toggle}>Toggle WindowTracker</Button>
      {showWindow && <WindowTracker />}
    </MainApp>
  )
}

export default App
