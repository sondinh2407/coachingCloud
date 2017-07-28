import {fromJS} from 'immutable'
import {SESSION_SELECTIONS} from 'utils/constants'
import {CHANGE_STEP, RESET_STEP} from '../constants'
const initialSelection = fromJS({
  selectedStep: SESSION_SELECTIONS.SELECT_SESSION,
  is12h: true,
  currentWeek: 0
})
export default function selection(state = initialSelection, action) {
  switch (action.type) {
    case CHANGE_STEP:
      return state.merge(action.payload)
    case RESET_STEP:
      return initialSelection
    default:
      return state
  }
}
