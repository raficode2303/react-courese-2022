import React from 'react'

// component
import { Wrapper, Content } from './App.styles'
// app style
const style = {
  background: 'linear-gradient(to bottom right, red, yellow)',
  height: '100vh',
  padding: '100px',
}
const App = () => {
  const [isExpend, setIsExpend] = React.useState(false)
  const expendCardToggle = () => {
    console.log('expend toggle')
    setIsExpend((prev) => !prev)
  }
  return (
    <div className='app' name='framer-motion' style={style}>
      <Wrapper isExpend={isExpend} onClick={expendCardToggle}>
        <Content isExpend={isExpend}>
          <h4>framer motion 🚀</h4>

          <p isExpend={isExpend}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam
            ut suscipit nesciunt laborum doloremque velit ex labore expedita
            placeat. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ipsa totam ut suscipit nesciunt laborum doloremque velit ex labore
            expedita placeat. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsa totam ut suscipit nesciunt laborum doloremque
            velit ex labore expedita placeat.
          </p>
        </Content>
      </Wrapper>
    </div>
  )
}

export default App
