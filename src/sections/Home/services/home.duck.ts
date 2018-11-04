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

export interface HomeState {
  readonly restaurants: Restaurant[];
}

export const initialHomeState: HomeState = { restaurants: [] };

const reducer: Reducer = (
  state: HomeState = initialHomeState,
  action: Action<types>
) => {
  switch (action.type) {
    case types.GET:
      return {
        ...state,
        restaurants: [{ name: 'Frankie & Bennys' }, { name: "Chiquito's" }]
      };
    default:
      return state;
  }
};

export default reducer;
