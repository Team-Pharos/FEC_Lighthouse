import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

  //component styling
  const Reviews = styled.div`
    width: 50%;
    `;

  const Breakdown = styled.div`
    float: left;
    width: 25%;
    height: 100%;
  `;

  const Container = styled.div`
    margin: 10px auto;
    width: 80%;
    height: 700px;
  `;
  const Header = styled.div`
    width: 100%;
  `;

const RatingsReviews = ({productId}) => {

  //render return
    return (
      <Container>
      <Header><h3>Ratings and Reviews</h3></Header>
      <Breakdown>
        <RatingBreakdown productId={productId}/>
      </Breakdown>
      <Reviews>
        <ReviewList productId={productId}/>
      </Reviews>
      </Container>
    )
}

export default RatingsReviews;