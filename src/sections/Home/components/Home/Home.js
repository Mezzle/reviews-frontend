/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

import React from 'react';
import Restaurant from '../../../../components/Restaurant';

export const Home = ({ restaurants }) => (
  <>
    {restaurants &&
      restaurants.map(restaurant => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
  </>
);

export default Home;
