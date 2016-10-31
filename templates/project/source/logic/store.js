/**
 * @module <%- name %> store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';


/**
 * setup store enchancers:
 * - thunk
 * - redux dev tools
 */
const { __REDUX_DEVTOOLS_EXTENSION__ : RDTE } = window;

let devtools = f => f; 
if (
  process.env.NODE_ENV !== 'production'
  && typeof RDTE === 'function'
) {
  devtools = RDTE();
}

const thunk = applyMiddleware(thunkMiddleware);


/**
 * compose enhancers
 */
const enhancers = compose(thunk, devtools);


/**
 * @function represents the api for reading and writing to the
 * application state.
 */
export default createStore(reducer, enhancers);
