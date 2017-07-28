/*
 *
 * SelectionPage actions
 *
 */

import {createAction} from 'utils/actionHelpers'
import {CHANGE_STEP, RESET_STEP, CHANGE_WEEK} from './constants'

export const changeStep = (payload) => createAction(CHANGE_STEP, payload)

export const closeSelection = () => createAction(RESET_STEP)

export const goBackStep = (payload) => createAction(CHANGE_STEP, payload)

export const goNextWeek = (payload) => createAction(CHANGE_WEEK, payload)

