import { Action, Reducer } from 'redux';
import { Restaurant } from '../../../models/Restaurant';

export enum types {
  GET = 'Home/GET',
  GET_SUCCESSFUL = 'Home/GET_SUCCESSFUL',
  GET_FAILED = 'Home/GET_FAILED'
}

export const load = () => ({
  type: types.GET
});

interface HomeState {
  readonly restaurants: Restaurant[];
}

const initialState: HomeState = { restaurants: [] };

const reducer: Reducer = (
  state: HomeState = initialState,
  action: Action<types>
) => {
  switch (action.type) {
    case types.GET:
      return {
        ...state,
        restaurants: [{ name: 'Frankie & Bennys' } as Restaurant]
      };
    default:
      return state;
  }
};

export default reducer;
