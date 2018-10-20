import { AnyAction, combineReducers, Reducer } from 'redux';

import sectionReducer from './sections/reducers';

interface RootState {
  sections?: object;
  entities?: object;
}

const rootReducer: Reducer<RootState, AnyAction> = combineReducers({
  sections: sectionReducer
});

export default rootReducer;
