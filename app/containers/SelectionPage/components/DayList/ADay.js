import React, {PropTypes} from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'
import * as propsValidation from '../../propsValidation'
import {colors, spacing, layout, typeface} from '../../../../utils/styles'

const WeekDay = styled.div`
`
const DateWrapper = styled.div`
  ${layout.flex}
  justify-content: space-between;
  font-size: ${typeface.size.small}
`
const Date = styled.span`
`
const Available = styled.span`
`
const Unavailable = styled.span`
  color: ${colors.mediumGray};
`

const ADay = ({info, onClick, topBorder}) => {
  const {value, am, pm} = info
  const available = am || pm
  const _onClick = () => available && onClick(info)
  const ADayWrapper = styled.div`
    ${topBorder && `border-top: 1px solid ${colors.mediumGray}`}
    background-color: ${colors.white};
    padding: ${spacing.paddingItem}px;
    color: ${available ? colors.black : colors.mediumGray};
  `
  const AM = styled.span`
    color: ${am ? colors.black : colors.mediumGray};
  `
  const PM = styled.span`
    color: ${pm ? colors.black : colors.mediumGray};
  `

  return (
    <ADayWrapper onClick={_onClick}>
      <WeekDay>{`${format(value, 'dddd')}${isToday(value) ? ' (Today)' : ''}`}</WeekDay>
      <DateWrapper>
        <Date>{format(value, 'DD MMMM, YYYY')}</Date>
        {available
          ? <Available><AM>am</AM>/<PM>pm</PM></Available>
          : <Unavailable>unavailable</Unavailable>
        }
      </DateWrapper>
    </ADayWrapper>
  )
}

ADay.propTypes = {
  info: PropTypes.shape(propsValidation.day).isRequired,
  onClick: PropTypes.func.isRequired,
  topBorder: PropTypes.bool
}

export default ADay
