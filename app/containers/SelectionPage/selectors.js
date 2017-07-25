import {createSelector} from 'reselect'

/**
 * Direct selector to the selectionPage state domain
 */
const selectSelectionPageDomain = () => state => state.get('selectionPage')

/**
 * Other specific selectors
 */

/**
 * Default selector used by SelectionPage
 */

const makeSelectSelectionPage = () =>
  createSelector(selectSelectionPageDomain(), substate => substate.toJS())

export default makeSelectSelectionPage
export {selectSelectionPageDomain}
