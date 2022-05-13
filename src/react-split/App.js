import React from 'react'
import Split from 'react-split'

const divStyle = {
  backgroundColor: '#ccc',
  width: '400px',
  height: '500px',
  border: '2px solid red',
}

const LeftComponent = () => <div style={divStyle}></div>

function App() {
  return (
    <Split
      sizes={[25, 75]}
      minSize={100}
      expandToMin={false}
      gutterSize={10}
      gutterAlign='center'
      snapOffset={30}
      dragInterval={1}
      direction='horizontal'
      cursor='col-resize'
    >
      <LeftComponent />
      <LeftComponent />
    </Split>
  )
}

export default App
