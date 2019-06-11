/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import { all } from 'redux-saga/effects';
import homeSaga from './sections/Home/services/home.sagas';
import restaurantSaga from './sections/Restaurant/services/restaurant.sagas';

export default function*() {
  yield all([homeSaga(), restaurantSaga()]);
}
