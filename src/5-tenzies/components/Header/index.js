import React from 'react'
//Link
import { Link } from 'react-router-dom'
// logo images
import tenziesLogo from '../../images/tenzies-logo.jpeg'
import FUNGAMESLogo from '../../images/fun_games-logo.jpg'
// Styles
import { Wrapper, Content, LogoImg, FUNGAMESLogoImg } from './Header.styles'
// Context
import { Context } from '../../context'
// Avatar - Canvas
import Canvas from '../Canvas'

function Header() {
  const { playerId } = React.useContext(Context)
  console.log('playerId is :', playerId)

  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={tenziesLogo} alt='tenzies-logo' />
        </Link>
        {playerId ? (
          <div>
            <span>PlayerIdplayerId as: {playerId.username}</span>
            <Canvas draw={playerId.username[0]} />
          </div>
        ) : (
          <Link to='/login' className='login-link'>
            <Canvas draw='avatar' />
            <span>Log In.</span>
          </Link>
        )}
        <FUNGAMESLogoImg src={FUNGAMESLogo} alt='fun-games-logo' />
      </Content>
    </Wrapper>
  )
}

export default Header
