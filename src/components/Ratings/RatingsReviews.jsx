import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

  //component styling
  const Reviews = styled.div`
    float: right;
    width: 60%;
    left: 25%;
    `;

  const Breakdown = styled.div`
    float: left;
    position: absolute;
    margin: 50px auto;
    width: 25%;
  `;

  const Container = styled.div`
    margin: 10px auto;
    padding: 3px;
    width: 80%;
    height: 700px;
    border-radius: 15px;
    overflow: auto;
  `;
  const Header = styled.div`
    width: 80%;
    position: absolute;
    padding: 1px 5px;
    color: #F2DAAC;
    background-color: #010A26;
    border-radius: 15px 15px 0 0;
  `;

const RatingsReviews = ({productId}) => {

  //render return
    return (
      <Container>
      <div id="RatingsAndReviews">
      <Header><h3>Ratings and Reviews</h3></Header>
      <Breakdown>
        <RatingBreakdown productId={productId}/>
      </Breakdown>
      <Reviews>
        <ReviewList productId={productId}/>
      </Reviews>
      </div>
      </Container>
    )
}

export default RatingsReviews;