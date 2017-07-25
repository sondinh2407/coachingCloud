import React from 'react'
import styled from 'styled-components'
import {colors} from '../../../../utils/styles'

const ADayWrapper = styled.div`
  background-color: ${colors.white};
`
const ADay = () =>
  <ADayWrapper>
    this is a day
  </ADayWrapper>

export default ADay
