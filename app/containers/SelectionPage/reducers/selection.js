import {fromJS} from 'immutable'
import {SESSION_SELECTIONS} from 'utils/constants'
import {UPDATE_SELECTION, RESET_STEP} from '../constants'
import {DEFAULT_TIME_ZONE} from '../components/TimezonePicker/time-zone'
const initialSelection = fromJS({
  timezone: DEFAULT_TIME_ZONE.value,
  selectedStep: SESSION_SELECTIONS.SELECT_SESSION,
  is12h: true,
  currentWeek: 0
})
export default function selection(state = initialSelection, action) {
  switch (action.type) {
    case UPDATE_SELECTION:
      return state.merge(action.payload)
    case RESET_STEP:
      return initialSelection
    default:
      return state
  }
}
