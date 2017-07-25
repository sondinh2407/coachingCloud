/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Helmet from 'react-helmet'
import {Button} from 'react-materialize'
import styled from 'styled-components'
import {colors, layout} from '../../utils/styles'

const HomeWrapper = styled.div`
  ${layout.verticalCenter}
  ${layout.col}
  justify-content: space-around;
  background-color: ${colors.lightGray};
  position: absolute;
  width: 100%;
  height: 100%;
`
const PlacedButton = styled.div`
  ${layout.center}
  width: 180px;
  height: 180px;
  line-height: 25px;
  font-size: 1.2rem;
  border-radius: 50%;
  border: 10px solid ${colors.gray}
  background: ${colors.mediumGray};
  color: ${colors.dark}
  text-align: center;
`


class HomePage extends React.PureComponent {

  static propTypes = {
    bookSession: PropTypes.func.isRequired
  }
  
  render() {
    return (
      <HomeWrapper>
        <Helmet title='Home' />
        <PlacedButton>
          <span>Button placed in One-to-One Sessions</span>
        </PlacedButton>
        <Button onClick={this.props.bookSession}>
          Book Session
        </Button>
      </HomeWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bookSession: () => dispatch(push('/selection'))
  }
}

export default connect(null, mapDispatchToProps)(HomePage)
