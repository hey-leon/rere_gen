/**
 * @module user core
 */
import { Map, fromJS } from 'immutable';


/**
 * @type {Function} initialState of user
 */
export function userInit() {
  return new Map();
}


/**
 * @type {Function} userMock mock a user on state
 */
export function userMock() {
  return fromJS({ _id: 1 });
}


/**
 * @type {Function} userSet set user state
 */
export function userSet(state, { user }) {
  return fromJS(user);
}


/**
 * @type {Function} userSetIn set part of user state
 */
export function userSetIn(state, { field, value }) {
  const path =
    typeof field !== Array ? [field] : field;

  return state.setIn(path, fromJS(value));
}


/**
 * @type {Function} userMergeIn merge part of user state
 */
export function userMergeIn(state, { field, value }) {
  const path =
    typeof field === Array ? field : [field];

  return state.mergeDeepIn(path, fromJS(value));
}