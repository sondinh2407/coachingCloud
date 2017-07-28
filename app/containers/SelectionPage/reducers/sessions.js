import {fromJS} from 'immutable'
import sessions from '../mocks/sessions'

const sessionsInitial = fromJS(sessions)

export default function (state = sessionsInitial, action) {
  switch (action.type) {
    default:
      return state
  }
}
