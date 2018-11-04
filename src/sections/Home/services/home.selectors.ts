import { createSelector } from 'reselect';
import { Restaurant } from '../../../models/Restaurant';
import { RootState } from '../../../root-reducer';
import { SectionsState } from '../../reducers';
import { HomeState, initialHomeState } from './home.duck';

export const sectionsSelector: (state: RootState) => SectionsState = (
  state: RootState
) => state.sections || { home: initialHomeState };

export const homeSelector: (state: RootState) => HomeState = createSelector(
  sectionsSelector,
  (sections: SectionsState) => sections.home
);

export const restaurantSelector: (
  state: RootState
) => Restaurant[] = createSelector(
  homeSelector,
  (home: HomeState) => home.restaurants || []
);
