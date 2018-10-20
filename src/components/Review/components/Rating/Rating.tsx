import * as React from 'react';
import { RatingProps } from './Rating.props';

export const Rating: React.SFC<RatingProps> = (props: RatingProps) => {
  const { rating } = props;

  return <p>{rating} / 5</p>;
};
