import React, {PropTypes} from 'react'
import styled from 'styled-components'
import * as propsValidation from '../../propsValidation'
import ADay from './ADay'

const DayListWrapper = styled.div`
`
const DayList = ({days}) =>
  <DayListWrapper>
    {days.map((day, i) => <ADay key={day.id} info={day} topBorder={!!i} />)}
  </DayListWrapper>

DayList.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape(propsValidation.day)).isRequired,
}

export default DayList
