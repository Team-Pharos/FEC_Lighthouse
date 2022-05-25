import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

  //component styling
  const StyledReviewList = styled(ReviewList)`
    margin: 10px;
    height: 500px;
    width: 60%;
    overflow: auto;
  `;

  const StyledRatingBreakdown = styled(RatingBreakdown)`
    width: 30%;
  `;

const RatingsReviews = ({productId}) => {

  //render return
    return (
      <>
      <h4>Ratings and Reviews</h4>
      <h5>Overall Rating for {productId}</h5>
      <StyledRatingBreakdown productId={productId}/>
      <h3>Reviews for {productId}</h3>
      <StyledReviewList productId={productId}/>
      </>
    )
}

export default RatingsReviews;