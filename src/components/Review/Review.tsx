import * as React from 'react';
import Restaurant from '../Restaurant';
import Rating from './components/Rating';
import { ReviewProps } from './Review.props';

export const Review: React.SFC<ReviewProps> = (props: ReviewProps) => {
  const { review } = props;

  return (
    <React.Fragment>
      <Restaurant restaurant={review.restaurant} />
      <Rating rating={review.rating} />
      <p>{review.headline}</p>
      <p>{review.body}</p>
    </React.Fragment>
  );
};
