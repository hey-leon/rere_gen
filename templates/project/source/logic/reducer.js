/**
 * @module <%- name %> reducer
 */
import { combineReducers } from 'redux-immutable';
import user from './user/reducer';


/**
 * list of reducers to combine
 */
const reducers = {
  user,
}


/*
 * @function the core reducer used by the application
 */
const reducer = combineReducers(reducers);


/**
 * default reducer
 */
export default reducer;


/**
 * 
 * Hot tips:
 * if you would like to enhance a reducer.
 * wraper the reducer fn and perform actions
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
 *   console.log(newState.toJS());
 *   return newState;
 * }
 * 
 * function persistantReducer(state, action) {
 *   const newState = reducer(state, action);
 *   storage.set(namespace, newState.toJS());
 *   return newState;
 * }
 * 
 */
