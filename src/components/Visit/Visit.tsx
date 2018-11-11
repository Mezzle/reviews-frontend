/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import * as React from 'react';
import Review from '../Review';
import { VisitProps } from './Visit.props';

export const Visit: React.SFC<VisitProps> = (props: VisitProps) => {
  const { visit } = props;
  return (
    <React.Fragment>
      <time>{visit.date}</time>
      <Review review={visit.review} />
    </React.Fragment>
  );
};
