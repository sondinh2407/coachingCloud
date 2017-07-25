/*
 *
 * SelectionPage
 *
 */

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import {createStructuredSelector} from 'reselect'
import makeSelectSelectionPage from './selectors'

export class SelectionPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet title='Session Selection' />
      </div>
    )
  }
}

SelectionPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  SelectionPage: makeSelectSelectionPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)
