import React, {PropTypes} from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import {colors} from '../../../../utils/styles'
import {day} from '../../propsValidation'

const ATimeWrapper = styled.div`
  background-color: ${colors.white};
`
const ATime = ({value, is12h, onClick}) => {
  const strFormat = is12h ? 'h:mm a' : 'H:mm'
  const _onClick = () => onClick(value)
  return (
    <ATimeWrapper onClick={_onClick}>
      {format(value, strFormat)}
    </ATimeWrapper>
  )
}
ATime.propTypes = {
  value: PropTypes.shape(day).isRequired,
  is12h: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
export default ATime
