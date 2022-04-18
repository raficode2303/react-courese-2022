import logo from '../../logo512.png'

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='react-logo-atom-symbol' className='nav--icon' />
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}
