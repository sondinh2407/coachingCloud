import {fromJS} from 'immutable'
import days from '../mocks/weeks'
const daysInitial = fromJS([
  ...days
])
export default function daysReducer(state = daysInitial, action) {
  switch (action.type) {
    default:
      return state
  }
}
