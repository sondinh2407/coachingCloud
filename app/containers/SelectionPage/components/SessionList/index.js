import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {makeSelectSessions} from '../../selectors'
import {selectSessionAction} from '../../actions'
import ASession from './ASession'

const SessionListWrapper = styled.div``


const SessionList = ({sessions, selectSession}) => {
  function onClick(id) {
    selectSession({
      id
    })
  }
  return (
    <SessionListWrapper>
      {sessions.map((s, i) => <ASession key={s.id} info={s} onClick={onClick} topBorder={!!i} />)}
    </SessionListWrapper>
  )
}


SessionList.propTypes = {
  sessions: PropTypes.array.isRequired,
  selectSession: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  sessions: makeSelectSessions(),
})

function mapDispatchToProps(dispatch) {
  return {
    selectSession: payload => dispatch(selectSessionAction({payload})),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SessionList)

