/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */
import { sectionsSelector, pathnameSelector } from '../../../selectors';
import { createSelector } from 'reselect';

export const restaurantSectionSelector = createSelector(
  sectionsSelector,
  sections => sections.restaurant
);

export const restaurantSelector = createSelector(
  restaurantSectionSelector,
  section => section.data || {}
);

export const restaurantIdFromLocationSelector = createSelector(
  pathnameSelector,
  pathname => pathname.replace('/restaurant/', '')
);
