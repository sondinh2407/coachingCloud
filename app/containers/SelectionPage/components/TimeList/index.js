import React, {PropTypes} from 'react'
import styled from 'styled-components'
import getHours from 'date-fns/get_hours'
import getMinutes from 'date-fns/get_minutes'
import setMinutes from 'date-fns/set_minutes'
import ATime from './ATime'
import {day} from '../../propsValidation'
const TimeListWrapper = styled.div`
`
const TimeList = ({daySelection: {am, pm, value}, times, changeStep, is12h}) => {
  const onChangeTypeClick = () => {
    changeStep({
      is12h: !is12h
    })
  }
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

    changeStep({
      selectedDay: newDay
    })
  }
  return (
    <TimeListWrapper>
      {data.map((s) => <ATime onClick={_onTimeClick} key={s} value={s} is12h={is12h} />)}
      <button onClick={onChangeTypeClick}>abc</button>
    </TimeListWrapper>
  )
}
TimeList.propTypes = {
  daySelection: PropTypes.shape(day).isRequired,
  times: PropTypes.object,
  is12h: PropTypes.bool.isRequired,
  changeStep: PropTypes.func.isRequired
}
export default TimeList
