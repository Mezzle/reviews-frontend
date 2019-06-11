/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */
import homeReducer from './Home/services/home.duck';
import restaurantReducer from './Restaurant/services/restaurant.duck';
import { combineReducers } from 'redux';

export default combineReducers({
  home: homeReducer,
  restaurant: restaurantReducer
});
