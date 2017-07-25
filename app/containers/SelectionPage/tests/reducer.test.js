import {fromJS} from 'immutable'
import selectionPageReducer from '../reducer'

describe('selectionPageReducer', () => {
  it('returns the initial state', () => {
    expect(selectionPageReducer(undefined, {})).toEqual(fromJS({}))
  })
})
