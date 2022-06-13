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
  const [player] = React.useContext(Context)
  console.log('player is :', player)

  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={tenziesLogo} alt='tenzies-logo' />
        </Link>
        {player ? (
          <div>
            <span>Player as: {player.username}</span>
            <Canvas draw={player.username[0]} />
          </div>
        ) : (
          <Link to='/login'>
            <span>Log In.</span>
            <Canvas draw='avatar' />
          </Link>
        )}
        <FUNGAMESLogoImg src={FUNGAMESLogo} alt='fun-games-logo' />
      </Content>
    </Wrapper>
  )
}

export default Header
