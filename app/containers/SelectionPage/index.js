import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import findIndex from 'lodash/findIndex'
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

const ConfirmWrapper = styled.div`${layout.center} padding-top: 20px;`
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
const headerHeight = [46, 140, 178, 162]

export class SelectionPage extends React.PureComponent {
  _generateSelectedStep = () => {
    const {
      sessions,
      days,
      selection: {
        selectedStep = SESSION_SELECTIONS.SELECT_SESSION,
        day = {},
        currentWeek = 0,
        is12h = true
      },
      updateSelection,
      times,
      closeSelection
    } = this.props

    switch (selectedStep) {
      case SESSION_SELECTIONS.SELECT_SESSION:
        return <SessionList sessions={sessions} selectSession={updateSelection} />
      case SESSION_SELECTIONS.SELECT_DAY:
        return <DayList days={days} currentWeek={currentWeek} updateSelection={updateSelection} />
      case SESSION_SELECTIONS.SELECT_TIME:
        return (
          <TimeList
            times={times}
            updateSelection={updateSelection}
            is12h={is12h}
            daySelection={day}
          />
        )
      case SESSION_SELECTIONS.CONFIRM_BOOK:
        return (
          <ConfirmWrapper>
            <Cancel onClick={closeSelection}>Cancel</Cancel>
            <Book>Book</Book>
          </ConfirmWrapper>
        )
      default:
        return <SessionList sessions={sessions} selectSession={updateSelection} />
    }
  }

  _getSelectedSession = () => {
    const {selection: {sessionId}, sessions} = this.props
    const index = findIndex(sessions, (s) => sessionId === s.id)

    return sessions[index]
  }

  render() {
    const {selection, closeSelection, goBackStep, updateSelection} = this.props
    const SelectionWrapper = styled.div`
      background-color: ${colors.gray};
      padding-top: ${headerHeight[selection.selectedStep]}px;
    `

    return (
      <SelectionWrapper>
        <Helmet title='Session Selection' />
        <Header
          height={headerHeight[selection.selectedStep]}
          info={selection}
          closeSelection={closeSelection}
          goBackStep={goBackStep}
          updateSelection={updateSelection}
          selectedSession={this._getSelectedSession()}
        />
        {this._generateSelectedStep()}
      </SelectionWrapper>
    )
  }
}

SelectionPage.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape(propsValidation.session)).isRequired,
  days: PropTypes.arrayOf(PropTypes.shape(propsValidation.day)).isRequired,
  selection: PropTypes.shape(propsValidation.selection).isRequired,
  updateSelection: PropTypes.func.isRequired,
  closeSelection: PropTypes.func.isRequired,
  goBackStep: PropTypes.func.isRequired,
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
    updateSelection: payload => dispatch(actions.updateSelection({payload})),
    closeSelection: () => {
      dispatch(actions.closeSelection())
      dispatch(push('/'))
    },
    goBackStep: payload => dispatch(actions.updateSelection({payload}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)
