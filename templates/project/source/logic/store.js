/**
 * @module <%- name %> store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';


/**
 * @type {Map} initialState is empty.
 */
const initialState = new Map();


/**
 * setup store enchancers:
 * - thunk
 * - redux dev tools
 */
const thunk = applyMiddleware(thunkMiddleware);
const devtools = window.devToolsExtension && process.env.NODE_ENV !== 'production' ?
  window.devToolsExtension()
  : f => f;


/**
 * composed enhancers
 */
const enhancers = compose(thunk, devtools);


/**
 * @function represents the api for reading and writing to the
 * application state.
 */
export default createStore(reducer, initialState, enhancers);
