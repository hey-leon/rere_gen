/**
 * @module user reducer
 */
import { createReducer } from 'helpers/redux';
import * as core from './core';


/**
 * module namespace
 */
const namespace = 'user';


/**
 * @function user reducer
 */
const reducer = createReducer(namespace, core);


/**
 * default reducer
 */
export default reducer;