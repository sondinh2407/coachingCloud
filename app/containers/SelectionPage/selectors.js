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

const makeSelectSessions = () =>
  createSelector(selectSelectionPageDomain(), substate => substate.get('sessions').toJS())

const makeSelectDays = () =>
  createSelector(selectSelectionPageDomain(), substate => substate.get('days').toJS())

const makeSelectSelection = () =>
  createSelector(selectSelectionPageDomain(), substate => substate.get('selection').toJS())

export {makeSelectSessions, makeSelectDays, makeSelectSelection}
