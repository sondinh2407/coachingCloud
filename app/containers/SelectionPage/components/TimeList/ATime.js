import React, {PropTypes} from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import {colors, spacing, layout} from '../../../../utils/styles'

const ATime = ({value, is12h, onClick, topBorder}) => {
  const strFormat = is12h ? 'h:mm a' : 'H:mm'
  const _onClick = () => onClick(value)
  const ATimeWrapper = styled.div`
    ${layout.center}
    ${topBorder && `border-top: 1px solid ${colors.mediumGray}`}
    background-color: ${colors.white};
    padding: ${spacing.paddingItem}px;
  `

  return (
    <ATimeWrapper onClick={_onClick}>
      {format(value, strFormat)}
    </ATimeWrapper>
  )
}

ATime.propTypes = {
  value: PropTypes.number.isRequired,
  is12h: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  topBorder: PropTypes.bool
}

export default ATime
