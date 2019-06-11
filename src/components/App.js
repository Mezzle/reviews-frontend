/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import routes from '../routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <React.Suspense fallback={<div>Loading...</div>}>
      {routes.map(route => (
        <Route {...route} key={route.path} />
      ))}
    </React.Suspense>
  </ConnectedRouter>
);

export default App;
