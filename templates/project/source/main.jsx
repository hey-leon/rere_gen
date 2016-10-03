import { render } from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import store from './logic/store';

import Router from './views';

render(
  <Provider store={store}><Router /></Provider>,
  document.getElementById('mount')
);
