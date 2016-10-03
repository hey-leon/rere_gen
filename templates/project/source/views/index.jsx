import React from 'react';

import {
  Router as ReactRouter,
  hashHistory, // TODO: swap to browserHistory
  Route,
} from 'react-router';

import Home from './Home';

/**
 * @param {Component} Router for managing the current activity
 */
export const Router = () => (
  <ReactRouter history={hashHistory}>
    <Route path='/' component={Home} />
  </ReactRouter>
);

export default Router;
