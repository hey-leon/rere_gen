/**
 * @module user logic
 */
import { createReducer, createActions } from 'redux-em';
import * as core from './core';


/**
 * @function user actions
 */
export const userActions = createActions(core);


/**
 * @function user reducer
 */
export default createReducer(core);
