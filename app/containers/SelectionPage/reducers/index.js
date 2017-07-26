import {combineReducers} from 'redux-immutable'
import sessions from './sessions'
import days from './days'
import selection from './selection'

export default combineReducers({
  sessions,
  days,
  selection
})
