import React from 'react';

const ReviewTile = ({review}) => {
  console.log(review);
  return (
    <>
    <h2>Rating: {review.rating}</h2>
    <h5>{review.body}</h5>
    </>
  )
}

export default ReviewTile;