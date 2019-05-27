/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import { combineReducers } from 'redux';
import sectionReducer from './sections/reducers';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    sections: sectionReducer,
    router: connectRouter(history)
  });

export default rootReducer;
