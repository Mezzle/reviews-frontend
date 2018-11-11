/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import * as React from 'react';
import { RestaurantProps } from './Restaurant.props';

export const Restaurant: React.SFC<RestaurantProps> = (
  props: RestaurantProps
) => {
  const { restaurant } = props;

  return <h1>{restaurant.name}</h1>;
};
