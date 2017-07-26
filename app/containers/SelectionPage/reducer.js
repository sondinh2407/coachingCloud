/*
 *
 * SelectionPage reducer
 *
 */

import {combineReducers} from 'redux-immutable'
import {fromJS} from 'immutable'
import {SESSION_SELECTIONS} from 'utils/constants'
import {SELECT_DAY_ACTION, SELECT_SESSION_ACTION, SELECT_TIME_ACTION} from './constants'
import {sessions, selectSession} from './components/SessionList/reducer'
import {days} from './components/DayList/reducer'
const selection = combineReducers({
  selectSession,
})
const initialCurrentStep = fromJS(1)
function currentStep(state = initialCurrentStep, action) {
  switch (action.type) {
    case SELECT_SESSION_ACTION:
      return fromJS(SESSION_SELECTIONS.SELECT_DAY)
    case SELECT_DAY_ACTION:
      return fromJS(SESSION_SELECTIONS.SELECT_TIME)
    case SELECT_TIME_ACTION:
      return fromJS(SESSION_SELECTIONS.CONFIRM_BOOK)
    default:
      return state
  }
}
export default combineReducers({
  sessions,
  days,
  selection,
  currentStep
})
