/**
 * @module <%- name %> reducer
 */
import * as core from './core';

/**
 * TODO: specify the necessary operations for each action of <%- name %>
 * @function <%- name %> reducer
 */
export default function (state = core.initialState, { type, data }) {
  switch (type) {
    case 'STATE_SET':
      return core.stateSet(state, data);
    default:
      return state;
  }
}
