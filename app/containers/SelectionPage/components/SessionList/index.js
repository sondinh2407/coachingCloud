import React from 'react'
import styled from 'styled-components'
import ASession from './ASession'

const SessionListWrapper = styled.div``
function onClick(id) {
  console.log('======', id)
}
const sessions = [
  {
    id: 1,
    title: 'Check in Call',
    description: '15 minutes Zoom Call',
    price: '$250'
  },
  {
    id: 2,
    title: 'Chemistry Session',
    description: '15 minutes Zoom Call'
  },
  {
    id: 3,
    title: 'Check in Call',
    description: '15 minutes Zoom Call',
    price: '$250'
  },
  {
    id: 4,
    title: 'Chemistry Session',
    description: '15 minutes Zoom Call'
  }
]
const SessionList = () =>
  <SessionListWrapper>
    {sessions.map((s, i) => <ASession key={s.id} info={s} onClick={onClick} topBorder={!!i} />)}
  </SessionListWrapper>

export default SessionList
