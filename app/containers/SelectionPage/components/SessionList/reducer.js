/*
 *
 * SelectionPage reducer
 *
 */

import {fromJS} from 'immutable'
import {SELECT_SESSION_ACTION} from '../../constants'
const sessionInitial = fromJS({
  data: [
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
    },
    {
      id: 5,
      title: 'Check in Call',
      description: '15 minutes Zoom Call',
      price: '$250'
    },
    {
      id: 6,
      title: 'Chemistry Session',
      description: '15 minutes Zoom Call'
    },
    {
      id: 7,
      title: 'Check in Call',
      description: '15 minutes Zoom Call',
      price: '$250'
    },
    {
      id: 8,
      title: 'Chemistry Session',
      description: '15 minutes Zoom Call'
    },
    {
      id: 9,
      title: 'Check in Call',
      description: '15 minutes Zoom Call',
      price: '$250'
    },
    {
      id: 10,
      title: 'Chemistry Session',
      description: '15 minutes Zoom Call'
    },
    {
      id: 11,
      title: 'Check in Call',
      description: '15 minutes Zoom Call',
      price: '$250'
    },
    {
      id: 12,
      title: 'Chemistry Session',
      description: '15 minutes Zoom Call'
    }
  ]
})

export function sessions(state = sessionInitial, action) {
  switch (action.type) {
    default:
      return state
  }
}

export function selectSession(state = fromJS({}), action) {
  switch (action.type) {
    case SELECT_SESSION_ACTION:
      return fromJS({
        ...action.payload
      })
    default:
      return state
  }
}
