/**
 * @module <%- name %> logic
 */
import { createActions, createReducer } from 'redux-em';
import * as core from './core';


/**
 * @function <%- name %> actions
 */
export const <%- name %>Actions = createActions(core);


/**
 * @function <%- name %> reducer
 */
export default createReducer(core);
