/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */
import { createSelector } from 'reselect';

import { sectionsSelector } from '../../../selectors';

export const homeSelector = createSelector(
  sectionsSelector,
  sections => sections.home
);

export const restaurantSelector = createSelector(
  homeSelector,
  home => home.restaurants || []
);
