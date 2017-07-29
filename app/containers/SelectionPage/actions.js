/*
 *
 * SelectionPage actions
 *
 */

import {createAction} from 'utils/actionHelpers'
import {UPDATE_SELECTION, RESET_STEP} from './constants'

export const updateSelection = (payload) => createAction(UPDATE_SELECTION, payload)

export const closeSelection = () => createAction(RESET_STEP)

export const goBackStep = (payload) => createAction(UPDATE_SELECTION, payload)

