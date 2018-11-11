/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import { Restaurant } from '../../models/Restaurant';

export interface HomeContainerProps {
  load: () => any;
  restaurants?: Restaurant[];
}
