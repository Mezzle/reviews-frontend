/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import * as React from 'react';
import Review from '../Review';

export const Visit = ({ visit }) => (
  <>
    <time>{visit.date}</time>
    <Review review={visit.review} />
  </>
);
