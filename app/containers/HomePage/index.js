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

import React from 'react'
import {Button, Icon} from 'react-materialize'

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button waves='light'>button</Button>
        <Button waves='light'>
          button<Icon left>cloud</Icon>
        </Button>
        <Button waves='light'>
          button<Icon right>cloud</Icon>
        </Button>
      </div>
    )
  }
}
