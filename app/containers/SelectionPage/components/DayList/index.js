import React, {PropTypes} from 'react'
import styled from 'styled-components'
import * as propsValidation from '../../propsValidation'
import ADay from './ADay'
import {SESSION_SELECTIONS} from '../../../../utils/constants'
const DayListWrapper = styled.div`
`
const DayList = ({week: {days, next}, goNextWeek, selectDay}) => {
  const _onBackClick = () => {
    if (!next) {
      return
    }
    goNextWeek({
      next
    })
  }
  function _onDayClick(day) {
    selectDay({
      selectedStep: SESSION_SELECTIONS.SELECT_TIME,
      day
    })
  }
  return (
    <DayListWrapper>
      {days.map((day, i) => <ADay key={day.id} onClick={_onDayClick} info={day} topBorder={!!i} />)}
      <button onClick={_onBackClick}>Next</button>
    </DayListWrapper>
  )
}

DayList.propTypes = {
  week: PropTypes.shape(propsValidation.week).isRequired,
  selectDay: PropTypes.func.isRequired,
  goNextWeek: PropTypes.func.isRequired
}

export default DayList
