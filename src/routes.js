/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */
import React from 'react';
import Restaurant from './sections/Restaurant';

const routes = [
  {
    component: React.lazy(() => import('./sections/Home')),
    path: '/',
    exact: true
  },
  {
    path:
      '/restaurant/:restaurant_id([0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12})',
    component: () => <Restaurant />
  }
];

export default routes;
