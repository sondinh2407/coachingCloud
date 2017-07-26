import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {SESSION_SELECTIONS} from '../../../../utils/constants'
import {session} from '../../propsValidation'
import ASession from './ASession'

const SessionListWrapper = styled.div``


const SessionList = ({sessions, selectSession}) => {
  function _onClick(sessionId) {
    selectSession({
      selectedStep: SESSION_SELECTIONS.SELECT_DAY,
      sessionId
    })
  }
  return (
    <SessionListWrapper>
      {sessions.map((s, i) => <ASession key={s.id} info={s} onClick={_onClick} topBorder={!!i} />)}
    </SessionListWrapper>
  )
}

SessionList.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape(session)).isRequired,
  selectSession: PropTypes.func.isRequired
}
export default SessionList
