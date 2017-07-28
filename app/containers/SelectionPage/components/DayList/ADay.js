import React, {PropTypes} from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import * as propsValidation from '../../propsValidation'
import {colors} from '../../../../utils/styles'

const ADayWrapper = styled.div`
  background-color: ${colors.white};
`
const ADay = ({info, onClick}) => {
  const _onClick = () => onClick(info)
  return (
    <ADayWrapper onClick={_onClick}>
      <span>{format(info.value, 'x')}</span>
    </ADayWrapper>
  )
}
ADay.propTypes = {
  info: PropTypes.shape(propsValidation.day).isRequired,
  onClick: PropTypes.func
}

export default ADay
