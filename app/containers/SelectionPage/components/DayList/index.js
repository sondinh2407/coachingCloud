import React, {PropTypes} from 'react'
import styled from 'styled-components'
import * as propsValidation from '../../propsValidation'
import ADay from './ADay'
import {SESSION_SELECTIONS} from '../../../../utils/constants'
const DayListWrapper = styled.div`
`
const DayList = ({days, currentWeek, changeStep}) => {
  const _onNextClick = () => {
    changeStep({
      currentWeek: currentWeek + 1
    })
  }
  const _onBackClick = () => {
    changeStep({
      currentWeek: currentWeek - 1
    })
  }
  function _onDayClick(day) {
    changeStep({
      selectedStep: SESSION_SELECTIONS.SELECT_TIME,
      day
    })
  }
  const data = days.slice(currentWeek * 7, (currentWeek + 1) * 7)
  return (
    <DayListWrapper>
      {data.map((day, i) => <ADay key={day.value} onClick={_onDayClick} info={day} topBorder={!!i} />)}
      <button hidden={currentWeek === 4} onClick={_onNextClick}>Next</button>
      <button hidden={currentWeek === 0} onClick={_onBackClick}>Back</button>
    </DayListWrapper>
  )
}

DayList.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape(propsValidation.day)).isRequired,
  changeStep: PropTypes.func.isRequired,
  currentWeek: PropTypes.number.isRequired
}

export default DayList
