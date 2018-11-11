/*
 * Copyright (c) 2018. Martin Meredith <martin@sourceguru.net>
 */

import { Action } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from '../../../api';
import { types } from './home.duck';

const homeSaga = function*(action: Action) {
  const restaurants = yield call(api.restaurants.get);

  yield put({ type: types.GET_SUCCESSFUL, payload: restaurants });
};

export default function*() {
  yield takeLatest(types.GET, homeSaga);
}
