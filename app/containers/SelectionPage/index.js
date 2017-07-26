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
import Header from './components/Header'
import SessionList from './components/SessionList'
import {colors} from '../../utils/styles'

const SelectionWrapper = styled.div`
  background-color: ${colors.gray};
`

export class SelectionPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SelectionWrapper>
        <Helmet title='Session Selection' />
        <Header />
        <SessionList />
      </SelectionWrapper>
    )
  }
}

SelectionPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)
