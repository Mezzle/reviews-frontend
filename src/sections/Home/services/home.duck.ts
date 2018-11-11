/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import { Reducer } from 'redux';
import { Restaurant } from '../../../models/Restaurant';

export enum types {
  GET = 'Home/GET',
  GET_SUCCESSFUL = 'Home/GET_SUCCESSFUL',
  GET_FAILED = 'Home/GET_FAILED'
}

interface GetSuccessfulAction {
  type: types.GET_SUCCESSFUL;
  payload: Restaurant[];
}

interface GetAction {
  type: types.GET;
}

interface GetFailedAction {
  type: types.GET_FAILED;
  payload: Error;
}

type Action = GetSuccessfulAction | GetAction | GetFailedAction;

export const load = () => ({
  type: types.GET
});

export interface HomeState {
  readonly restaurants: Restaurant[];
}

export const initialHomeState: HomeState = { restaurants: [] };

const reducer: Reducer = (
  state: HomeState = initialHomeState,
  action: Action
) => {
  switch (action.type) {
    case types.GET_SUCCESSFUL:
      return {
        ...state,
        restaurants: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
