import React from 'react';

const ReviewTile = ({review}) => {

  return (
    <>
      <h4>Rating: {review.rating}</h4>
      <h5>
        Reviewer: {review.reviewer_name} Date: {review.date}
        </h5>
      <h4>Summary: {review.summary}</h4>
      <p>{review.body}</p>
    </>
  )
}

export default ReviewTile;