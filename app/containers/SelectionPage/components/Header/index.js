import React from 'react'
import styled from 'styled-components'
import {colors} from '../../../../utils/styles'

const HeaderWrapper = styled.header`
  background-color: ${colors.gray};
`
const Header = () =>
  <HeaderWrapper>
    This is header
  </HeaderWrapper>

export default Header
