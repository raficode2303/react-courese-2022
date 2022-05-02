import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './1-react-facts/App'

ReactDOM.render(<App />, document.getElementById('root'))

/*
need to fix bug of theme system not appaly:

TRY IT:

  document.documentElement.className = theme;
    localStorage.setItem('theme', theme);


*/
