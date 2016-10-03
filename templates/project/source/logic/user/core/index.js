/**
 * @module user core
 */
import { Map, fromJS } from 'immutable';



/**
 * TODO: specify the necessary initial state of user
 * @type {Map} initialState of user
 */
export const initialState = new Map();


/**
 * TODO: specify the necessary state operations of user
 * @type {Function} stateSet example operation
 */
export const stateSet = (state, { field, val }) =>
  state.set(field, val);
