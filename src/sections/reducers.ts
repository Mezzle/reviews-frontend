import { combineReducers } from 'redux';
import homeReducer from './Home/services/home.duck';

export default combineReducers({ home: homeReducer });
