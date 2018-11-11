/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import dotenv from 'dotenv';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './register-service-worker';
import store from './store';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
