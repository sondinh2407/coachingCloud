import React, {PropTypes} from 'react'
import styled from 'styled-components'
import getHours from 'date-fns/get_hours'
import getMinutes from 'date-fns/get_minutes'
import setMinutes from 'date-fns/set_minutes'
import ATime from './ATime'
import {SESSION_SELECTIONS} from '../../../../utils/constants'
import {day} from '../../propsValidation'

const TimeListWrapper = styled.div``
const TimeList = ({daySelection: {am, pm, value}, times, updateSelection, is12h}) => {
  let data = []
  if (am) {
    data = data.concat(times.morning)
  }
  if (pm) {
    data = data.concat(times.noon)
  }
  function _onTimeClick(time) {
    const hours = getHours(time)
    const minutes = getMinutes(time)
    const newDay = setMinutes(value, (hours * 60) + minutes)
    
    updateSelection({
      selectedStep: SESSION_SELECTIONS.CONFIRM_BOOK,
      dateTime: newDay.getTime()
    })
  }
  return (
    <TimeListWrapper>
      {data.map((t, i) =>
        <ATime onClick={_onTimeClick} key={t} value={t} is12h={is12h} topBorder={!!i} />
      )}
    </TimeListWrapper>
  )
}
TimeList.propTypes = {
  daySelection: PropTypes.shape(day).isRequired,
  times: PropTypes.object,
  is12h: PropTypes.bool.isRequired,
  updateSelection: PropTypes.func.isRequired
}
export default TimeList
