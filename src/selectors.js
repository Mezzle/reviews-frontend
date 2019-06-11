/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

import { initialHomeState } from './sections/Home/services/home.duck';
import { initialRestaurantState } from './sections/Restaurant/services/restaurant.duck';
import { createSelector } from 'reselect';

export const sectionsSelector = state =>
  state.sections || {
    home: initialHomeState,
    restaurant: initialRestaurantState
  };

export const routerSelector = state => state.router || {};

export const locationSelector = createSelector(
  routerSelector,
  router => router.location || {}
);

export const pathnameSelector = createSelector(
  locationSelector,
  location => location.pathname || ''
);
