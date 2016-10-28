/**
 * @module user core
 */
import { Map, fromJS } from 'immutable';


/**
 * @type {Map} initialState of user
 */
export function userInit() {
  return new Map();
}


/**
 * @type {Function} stateSet example operation
 */
export function userSet(state, { newState }) {
  return fromJS(newState);
}


/**
 * @type {Function} stateSet example operation
 */
export function userSetIn(state, { namespace, segment }) {
  const path =
    typeof namespace === Array ? namespace : [namespace];

  return state.setIn(path, fromJS(segment));
}


/**
 * @type {Function} stateSet example operation
 */
export function userMergeIn(state, { namespace, segment }) {
  const path =
    typeof namespace === Array ? namespace : [namespace];

  return state.mergeDeepIn(path, fromJS(segment));
}
