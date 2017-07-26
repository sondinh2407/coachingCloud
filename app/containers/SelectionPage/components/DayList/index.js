import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {makeSelectDays} from '../../selectors'
import ADay from './ADay'

const DayListWrapper = styled.div`
`
const DayList = ({days}) =>
  <DayListWrapper>
    {days.map((day, i) => <ADay key={day.id} info={day} topBorder={!!i} />)}
  </DayListWrapper>

DayList.propTypes = {
  days: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  days: makeSelectDays(),
})
export default connect(mapStateToProps)(DayList)

