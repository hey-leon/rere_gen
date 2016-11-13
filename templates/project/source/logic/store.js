/**
 * @module <%- name %> store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


/**
 * setup store enchancers:
 * - redux dev tools
 * - thunk
 */
let composeEnhancers = compose;
if (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}


/**
 * compose enhancers
 */
const enhancers = composeEnhancers(applyMiddleware(thunk));


/**
 * @function represents the api for reading and writing to the
 * application state.
 */
export default createStore(reducer, enhancers);
