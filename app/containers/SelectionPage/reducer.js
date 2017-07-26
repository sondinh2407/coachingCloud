/*
 *
 * SelectionPage reducer
 *
 */

import {combineReducers} from 'redux-immutable'

import {sessions, selectSession} from './components/SessionList/reducer'
const selection = combineReducers({
  selectSession,
})

export default combineReducers({
  sessions,
  selection
})
