/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

import React from 'react';
import Restaurant from '../../../../components/Restaurant';

export const Home = props => {
  console.log(props);
  return (
    <React.Fragment>
      {props.restaurants &&
        props.restaurants.map(restaurant => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
    </React.Fragment>
  );
};
