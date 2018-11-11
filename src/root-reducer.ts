/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import { AnyAction, combineReducers, Reducer } from 'redux';

import sectionReducer, { SectionsState } from './sections/reducers';

export interface RootState {
  readonly sections?: SectionsState;
  readonly entities?: object;
}

const rootReducer: Reducer<RootState, AnyAction> = combineReducers({
  sections: sectionReducer
});

export default rootReducer;
