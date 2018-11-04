import { combineReducers } from 'redux';
import homeReducer, { HomeState } from './Home/services/home.duck';

export interface SectionsState {
  readonly home: HomeState;
}

export default combineReducers({ home: homeReducer });
