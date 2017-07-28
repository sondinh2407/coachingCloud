import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Helmet from 'react-helmet'
import {Button} from 'react-materialize'
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'
import {SESSION_SELECTIONS} from 'utils/constants'
import * as actions from './actions'
import * as propsValidation from './propsValidation'
import {
  makeSelectSelection,
  makeSelectDays,
  makeSelectSessions,
  makeSelectTimes
} from './selectors'
import Header from './components/Header'
import SessionList from './components/SessionList'
import TimeList from './components/TimeList'
import DayList from './components/DayList'
import {colors, spacing, layout} from '../../utils/styles'

const SelectionWrapper = styled.div`
  background-color: ${colors.gray};
`
const ConfirmWrapper = styled.div`
  ${layout.center}
  padding-top: 30px;
`
const Cancel = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.black};
  margin-right: ${spacing.space}px;
  padding: 0 ${spacing.paddingItem}px;
`
const Book = styled(Button)`
  background-color: ${colors.secondary};
  padding: 0 ${spacing.paddingItem}px;
`

export class SelectionPage extends React.PureComponent {
  _generateSelectedStep = () => {
    const {
      sessions,
      days,
      selection,
      selection: {day = {}, currentWeek = 0, is12h = true},
      changeStep,
      goNextWeek,
      times
    } = this.props

    switch (selection.selectedStep) {
      case SESSION_SELECTIONS.SELECT_SESSION:
        return <SessionList sessions={sessions} selectSession={changeStep} />
      case SESSION_SELECTIONS.SELECT_DAY:
        return (
          <DayList
            days={days}
            goNextWeek={goNextWeek}
            currentWeek={currentWeek}
            changeStep={changeStep}
          />
        )
      case SESSION_SELECTIONS.SELECT_TIME:
        return <TimeList times={times} changeStep={changeStep} is12h={is12h} daySelection={day} />
      case SESSION_SELECTIONS.CONFIRM_BOOK:
        return (
          <ConfirmWrapper>
            <Cancel>Cancel</Cancel>
            <Book>Book</Book>
          </ConfirmWrapper>
        )
      default:
        return <SessionList sessions={sessions} selectSession={changeStep} />
    }
  }

  render() {
    const {selection, closeSelection, goBackStep} = this.props

    return (
      <SelectionWrapper>
        <Helmet title='Session Selection' />
        <Header info={selection} closeSelection={closeSelection} goBackStep={goBackStep} />
        {this._generateSelectedStep()}
      </SelectionWrapper>
    )
  }
}

SelectionPage.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape(propsValidation.session)).isRequired,
  days: PropTypes.arrayOf(PropTypes.shape(propsValidation.day)).isRequired,
  selection: PropTypes.shape(propsValidation.selection).isRequired,
  changeStep: PropTypes.func.isRequired,
  closeSelection: PropTypes.func.isRequired,
  goBackStep: PropTypes.func.isRequired,
  goNextWeek: PropTypes.func.isRequired,
  times: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  sessions: makeSelectSessions(),
  days: makeSelectDays(),
  selection: makeSelectSelection(),
  times: makeSelectTimes()
})

function mapDispatchToProps(dispatch) {
  return {
    changeStep: payload => dispatch(actions.changeStep({payload})),
    goNextWeek: payload => dispatch(actions.goNextWeek({payload})),
    closeSelection: () => {
      dispatch(actions.closeSelection())
      dispatch(push('/'))
    },
    goBackStep: payload => dispatch(actions.goBackStep({payload}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)
