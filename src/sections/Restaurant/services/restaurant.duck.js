/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

export const types = {
  GET: 'Restaurant/GET',
  GET_SUCCESSFUL: 'Restaurant/GET_SUCCESSFUL',
  GET_FAILED: 'Restaurant/GET_FAILED'
};

export const load = () => ({
  type: types.GET
});

export const initialRestaurantState = { loading: false };

const reducer = (state = initialRestaurantState, action) => {
  switch (action.type) {
    case types.GET_SUCCESSFUL:
      return {
        ...state,
        data: action.payload,
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
