import {fromJS} from 'immutable'
import format from 'date-fns/format'
import startOfWeek from 'date-fns/start_of_week'
import {CHANGE_WEEK} from '../constants'
import generateWeeks from '../mocks/weeks'

const startDayWeek = format(startOfWeek(new Date(), {weekStartsOn: 1}), 'x')
const weeks = generateWeeks(2, 2)
const week = weeks[startDayWeek]
const daysInitial = fromJS({
  ...week
})
export default function weekReducer(state = daysInitial, action) {
  switch (action.type) {
    case CHANGE_WEEK:
      return fromJS({
        ...weeks[action.payload.next]
      })
    default:
      return state
  }
}
