import {fromJS} from 'immutable'
import times from '../mocks/times'
const timesInitial = fromJS({
  ...times
})
export default function timesReducer(state = timesInitial, action) {
  switch (action.type) {
    default:
      return state
  }
}
