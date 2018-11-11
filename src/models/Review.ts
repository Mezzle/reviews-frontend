/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import { Rating } from '../types';
import { Restaurant } from './Restaurant';

export interface Review {
  restaurant: Restaurant;
  rating: Rating;
  headline: string;
  body: string;
}
