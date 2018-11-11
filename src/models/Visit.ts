/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import { Review } from './Review';

export interface Visit {
  date: Date;
  review: Review;
}
