/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import * as React from 'react';
import { Restaurant } from '../../../../components/Restaurant/Restaurant';
import { Restaurant as RestaurantModel } from '../../../../models/Restaurant';
import { HomeProps } from './Home.props';

export const Home: React.SFC<HomeProps> = (props: HomeProps) => (
  <React.Fragment>
    {props.restaurants &&
      props.restaurants.map((restaurant: RestaurantModel) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
  </React.Fragment>
);
