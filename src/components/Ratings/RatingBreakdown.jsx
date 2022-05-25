import React from 'react';
import styled from 'styled-components';

const RatingBreakdown = ({productId}) => {

  const OverallRating = styled.div`
    font-family: arial;
  `;

  return(
    <div className="RatingBreakdown">
    <OverallRating>Overall Rating for {productId}</OverallRating>
    <h2>OVERALL RATING</h2>
    </div>
  )
}

export default RatingBreakdown;