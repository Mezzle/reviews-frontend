/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */
import React from 'react';

const routes = [
  {
    component: React.lazy(() => import('./sections/Home')),
    path: '/',
    exact: true
  },
  {
    path: '/test',
    component: () => <h1>Test</h1>
  }
];

export default routes;
