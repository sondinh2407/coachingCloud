import React, {PropTypes} from 'react'
import styled from 'styled-components'
import * as propsValidation from '../../propsValidation'
import {colors} from '../../../../utils/styles'

const ADayWrapper = styled.div`
  background-color: ${colors.white};
`
const ADay = ({info: {value, id}, onClick}) => {
  const _onClick = () => onClick(id)
  return (
    <ADayWrapper onClick={_onClick}>
      <span>{value}</span>
    </ADayWrapper>
  )
}
ADay.propTypes = {
  info: PropTypes.shape(propsValidation.day).isRequired,
  onClick: PropTypes.func
}

export default ADay
