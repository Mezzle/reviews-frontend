/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import * as React from 'react';
import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant }) => (
  <>
    <h1>
      <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
    </h1>
    <small>{restaurant.id}</small>
  </>
);

export default Restaurant;
