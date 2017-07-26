/*
 *
 * SelectionPage
 *
 */

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'
import {SESSION_SELECTIONS} from 'utils/constants'
import {makeSelectCurrentStep} from './selectors'
import Header from './components/Header'
import SessionList from './components/SessionList'
import TimeList from './components/TimeList'
import DayList from './components/DayList'
import {colors} from '../../utils/styles'

const SelectionWrapper = styled.div`
  background-color: ${colors.gray};
`
function renderCurrentStep(step) {
  switch (step) {
    case SESSION_SELECTIONS.SELECT_SESSION:
      return <SessionList />
    case SESSION_SELECTIONS.SELECT_DAY:
      return <DayList />
    case SESSION_SELECTIONS.SELECT_TIME:
      return <TimeList />
    default:
      return <SessionList />
  }
}
export class SelectionPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SelectionWrapper>
        <Helmet title='Session Selection' />
        <Header />
        {renderCurrentStep(this.props.currentStep)}
      </SelectionWrapper>
    )
  }
}

SelectionPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  currentStep: PropTypes.number
}

const mapStateToProps = createStructuredSelector({
  currentStep: makeSelectCurrentStep()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)
