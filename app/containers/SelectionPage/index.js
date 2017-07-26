import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'
import {SESSION_SELECTIONS} from 'utils/constants'
import * as actions from './actions'
import * as propsValidation from './propsValidation'
import {makeSelectSelection, makeSelectDays, makeSelectSessions} from './selectors'
import Header from './components/Header'
import SessionList from './components/SessionList'
import TimeList from './components/TimeList'
import DayList from './components/DayList'
import {colors} from '../../utils/styles'

const SelectionWrapper = styled.div`
  background-color: ${colors.gray};
`

export class SelectionPage extends React.PureComponent {

  _generateSelectedStep = () => {
    const {sessions, days, selection, selectSession} = this.props
    
    switch (selection.selectedStep) {
      case SESSION_SELECTIONS.SELECT_SESSION:
        return <SessionList sessions={sessions} selectSession={selectSession} />
      case SESSION_SELECTIONS.SELECT_DAY:
        return <DayList days={days} />
      case SESSION_SELECTIONS.SELECT_TIME:
        return <TimeList />
      case SESSION_SELECTIONS.CONFIRM_BOOK:
        return <span>Confirm book</span>
      default:
        return <SessionList sessions={sessions} selectSession={selectSession} />
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
  selectSession: PropTypes.func.isRequired,
  closeSelection: PropTypes.func.isRequired,
  goBackStep: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  sessions: makeSelectSessions(),
  days: makeSelectDays(),
  selection: makeSelectSelection()
})

function mapDispatchToProps(dispatch) {
  return {
    selectSession: payload => dispatch(actions.selectSession({payload})),
    closeSelection: () => {
      dispatch(actions.closeSelection())
      dispatch(push('/'))
    },
    goBackStep: payload => dispatch(actions.goBackStep({payload})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)
