import {combineReducers} from 'redux-immutable'
import sessions from './sessions'
import days from './days'
import selection from './selection'
import times from './times'

export default combineReducers({
  sessions,
  days,
  times,
  selection
})
