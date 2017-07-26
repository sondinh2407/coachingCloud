/*
 *
 * SelectionPage actions
 *
 */

import {createAction} from 'utils/actionHelpers'
import {SELECT_SESSION_ACTION} from './constants'

export const selectSessionAction = (payload) => createAction(SELECT_SESSION_ACTION, payload)
