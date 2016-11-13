/**
 * @module <%- name %> reducer
 */
import { combineReducers } from 'redux-immutable';
import user from './user';


/**
 * list of reducers to combine
 */
const reducers = {
  user,
}


/**
 * @function the core reducer used by the application
 */
export default combineReducers(reducers);


/**
 * Hot tips:
 * if you would like to enhance a reducer.
 * wrap the reducer fn and perform actions
 * e.g. save state of reducer persistantly
 * or log state.
 * 
 * the only contract of the enhancers are
 * 
 * must accept params: state, action
 * must pass these params to reducer
 * must return what reducer returns.
 * 
 * code examplers:
 * 
 * function loggingReducer(state, action) {
 *   const newState = reducer(state, action);
 *   console.log(newState);
 *   return newState;
 * }
 * 
 * function persistantReducer(state, action) {
 *   const newState = reducer(state, action);
 *   storage.set(namespace, newState);
 *   return newState;
 * }
 * 
 */
