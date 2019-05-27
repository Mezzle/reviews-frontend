/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */
import { createSelector } from 'reselect';

import { initialHomeState } from './home.duck';

export const sectionsSelector = state =>
  state.sections || { home: initialHomeState };

export const homeSelector = createSelector(
  sectionsSelector,
  sections => sections.home
);

export const restaurantSelector = createSelector(
  homeSelector,
  home => home.restaurants || []
);
