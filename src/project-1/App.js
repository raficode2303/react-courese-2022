import './App.css'
import logo from '../logo.svg'

const Header = () => {
  return (
    <header>
      <div className='logo-facts'>
        <img src={logo} alt='react-logo-atom-symbol' />
        <h5>React Facts</h5>
      </div>
      <h4>React Course - project-1</h4>
    </header>
  )
}

const Main = () => {
  return (
    <main>
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousads of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}
function App({ number }) {
  return (
    <div className='app'>
      <h1>{number}</h1>
      <Header />
      <Main />
    </div>
  )
}

export default App
