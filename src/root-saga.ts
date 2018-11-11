/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import { all } from 'redux-saga/effects';
import homeSaga from './sections/Home/services/home.sagas';

export default function*() {
  yield all([homeSaga()]);
}
