/**
 * @module <%- name %> router
 */
import React from 'react';
import {
  Router as ReactRouter,
  browserHistory,
  IndexRedirect,
  Route,
} from 'react-router';

import { verify } from 'libs/router';
import store from 'logic/store';

import Welcome from './Welcome';
import Home from './Home';
import Root from './Root';


/**
 * verify config to check if user, else
 * redirect to welcome.
 */
const userLoggedIn = {
  path: ['user', '_id'],
  redirect: '/Welcome',
  store,
}


/**
 * @param {Component} Router for managing the current activity
 */
export default function Router() {
  return (
    <ReactRouter history={browserHistory}>
      <Route component={Root}>


        {/**
          * authrousied routes
          */}
        <Route path="/" onEnter={verify(userLoggedIn)}>
          <Route path="Home" component={Home} />
          <IndexRedirect to="Home" />
        </Route>


        {/**
          * public routes
          */}
        <Route path="/Welcome" component={Welcome} />


      </Route>
    </ReactRouter>
  );
}