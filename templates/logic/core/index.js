/**
 * @module <%- name %> core
 */
import { Map, fromJS } from 'immutable';



/**
 * TODO: specify the necessary initial state of <%- name %>
 * @type {Map} initialState of <%- name %>
 */
export const initialState = new Map();


/**
 * TODO: specify the necessary state operations of <%- name %>
 * @type {Function} stateSet example operation
 */
export const stateSet = (state, { field, val }) =>
  state.set(field, val);
