import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {Icon, Button} from 'react-materialize'
import * as propsValidation from '../../propsValidation'
import ADay from './ADay'
import {SESSION_SELECTIONS} from '../../../../utils/constants'
import {layout, colors} from '../../../../utils/styles'

const footerHeight = 36
const DayListWrapper = styled.div`
  margin-bottom: ${footerHeight}px;
`
const MoveWrapper = styled.div`
  ${layout.flex}
  justify-content: space-between;
  background-color: ${colors.gray};
  width: 100%;
  position: fixed;
  bottom: 0;
`
const NavigateButton = `
  height: ${footerHeight}px;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
  i {
    margin: 0;
  }
`
const Before = styled(Button)`
  ${NavigateButton}
`
const Next = styled(Button)`
  ${NavigateButton}
  margin-left: auto;
`
const DayList = ({days, currentWeek, updateSelection}) => {
  const _onNextClick = () => {
    updateSelection({
      currentWeek: currentWeek + 1
    })
  }
  const _onBackClick = () => {
    updateSelection({
      currentWeek: currentWeek - 1
    })
  }
  function _onDayClick(day) {
    updateSelection({
      selectedStep: SESSION_SELECTIONS.SELECT_TIME,
      day
    })
  }
  const data = days.slice(currentWeek * 7, (currentWeek + 1) * 7)
  return (
    <DayListWrapper>
      {data.map((day, i) => <ADay key={day.value} onClick={_onDayClick} info={day} topBorder={!!i} />)}
      <MoveWrapper>
        {(currentWeek > 0) &&
          <Before flat onClick={_onBackClick}>
            <Icon left>navigate_before</Icon>Before
          </Before>
        }
        {(currentWeek < 4) &&
          <Next flat onClick={_onNextClick}>
            Next<Icon right>navigate_next</Icon>
          </Next>
        }
      </MoveWrapper>
    </DayListWrapper>
  )
}

DayList.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape(propsValidation.day)).isRequired,
  updateSelection: PropTypes.func.isRequired,
  currentWeek: PropTypes.number.isRequired
}

export default DayList
