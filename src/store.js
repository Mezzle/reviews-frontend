/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default function configureStore() {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancer(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );

  const store = createStore(rootReducer(history), enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
