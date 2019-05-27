/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

export const types = {
  GET: 'Home/GET',
  GET_SUCCESSFUL: 'Home/GET_SUCCESSFUL',
  GET_FAILED: 'Home/GET_FAILED'
};

export const load = () => {
  return {
    type: types.GET
  };
};

export const initialHomeState = { restaurants: [], loading: false };

const reducer = (state = initialHomeState, action) => {
  switch (action.type) {
    case types.GET_SUCCESSFUL:
      return {
        ...state,
        restaurants: action.payload,
        loading: false
      };

    case types.GET:
      return {
        ...state,
        loading: true
      };

    case types.GET_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
