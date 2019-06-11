/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as api from '../../../api';
import { types } from './restaurant.duck';
import { restaurantIdFromLocationSelector } from './restaurant.selectors';

const restaurantSaga = function*(action) {
  const id = yield select(restaurantIdFromLocationSelector);
  const restaurant = yield call(api.restaurants.getOne, id);

  yield put({ type: types.GET_SUCCESSFUL, payload: restaurant });
};

export default function*() {
  yield takeLatest(types.GET, restaurantSaga);
}
