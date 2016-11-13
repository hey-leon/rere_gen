/**
 * @module <%- name %> actions
 */
import { combineActions } from 'redux-em';
import { userActions } from './user';


/**
 * list of actions to combine
 */
const actions = [
  userActions,
];


/**
 * the combined actions module
 */
export default combineActions(actions);
