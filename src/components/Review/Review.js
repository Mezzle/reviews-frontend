/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import * as React from 'react';
import Restaurant from '../Restaurant/index';
import Rating from './components/Rating/index';

export const Review = ({ review }) => (
  <React.Fragment>
    <Restaurant restaurant={review.restaurant} />
    <Rating rating={review.rating} />
    <p>{review.headline}</p>
    <p>{review.body}</p>
  </React.Fragment>
);
