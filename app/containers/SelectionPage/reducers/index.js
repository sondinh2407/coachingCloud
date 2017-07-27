import {combineReducers} from 'redux-immutable'
import sessions from './sessions'
import week from './week'
import selection from './selection'

export default combineReducers({
  sessions,
  week,
  selection
})
