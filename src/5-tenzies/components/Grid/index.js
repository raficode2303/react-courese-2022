import React from 'react'
// styles
import { Wrapper, Content } from './Grid.styles'

import PropTypes from 'prop-types'

const Grid = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

Grid.propTypes = {
  header: PropTypes.string,
}

export default Grid
