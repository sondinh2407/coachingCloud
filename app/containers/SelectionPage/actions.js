/*
 *
 * SelectionPage actions
 *
 */

import {createAction} from 'utils/actionHelpers'
import {CHANGE_STEP, RESET_STEP} from './constants'

export const selectSession = (payload) => createAction(CHANGE_STEP, payload)

export const closeSelection = () => createAction(RESET_STEP)

export const goBackStep = (payload) => createAction(CHANGE_STEP, payload)
