import React, {PropTypes} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import {colors} from '../../../../utils/styles'

const ADayWrapper = styled.div`
  background-color: ${colors.white};
`
const ADay = ({info: {day}}) =>
  <ADayWrapper>
    <span>{day}</span>
    <span>{moment(day).format('dddd')}</span>
  </ADayWrapper>

ADay.propTypes = {
  info: PropTypes.shape({
    day: PropTypes.string,
  }),
}

export default ADay
