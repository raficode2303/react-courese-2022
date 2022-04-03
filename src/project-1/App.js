import './App.css'
import logo from '../logo.svg'
/* COMPONENTS */
import { HeaderPractice } from './HeaderPractice'
import MainContentPractice from './MainContentPractice'
import FooterPractcice from './FooterPractice'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-facts'>
        <img src={logo} alt='react-logo-atom-symbol' className='img' />
        <h5>React Facts</h5>
      </div>
      <h4>React Course - project-1</h4>
    </header>
  )
}

const Main = () => {
  return (
    <main className='main'>
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

function Practice() {
  return (
    <>
      <HeaderPractice />
      <MainContentPractice />
      <FooterPractcice />
    </>
  )
}
function App() {
  return (
    <div className='app'>
      <Practice />
    </div>
  )
}

export default App
