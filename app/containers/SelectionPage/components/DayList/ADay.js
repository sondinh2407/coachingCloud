import React, {PropTypes} from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import * as propsValidation from '../../propsValidation'
import {colors} from '../../../../utils/styles'

const ADayWrapper = styled.div`
  background-color: ${colors.white};
`
const ADay = ({info: {day}}) =>
  <ADayWrapper>
    <span>{day}</span>
    <span>{format(day, 'dddd')}</span>
  </ADayWrapper>

ADay.propTypes = {
  info: PropTypes.shape(propsValidation.day).isRequired,
}

export default ADay
