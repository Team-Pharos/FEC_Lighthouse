import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewModal from './NewReviewModal.jsx';

//component styling
const Reviews = styled.div`
    margin: 50px auto;
    float: right;
    width: 60%;
    left: 25%;
    `;

const Breakdown = styled.div`
    font-family: 'Poppins', sans-serif;
    float: left;
    position: absolute;
    margin: 50px auto;
    width: 25%;
  `;

const Container = styled.div`
    margin: 10px auto;
    padding: 3px;
    width: 80%;
    height: 500px;
    border-radius: 15px;
    overflow: auto;
  `;
const Header = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 80%;
    position: absolute;
    padding: 1px 5px;
    color: #F2DAAC;
    background-color: #010A26;
    border-radius: 15px 15px 0 0;
  `;

const OpenAddReview = styled.button`
    width: 80px;
    margin: 5px auto;
    background-color: #F2DAAC;
    border: 1px solid #F26938;
    &:hover {
      border: 1px solid #6BA69B;
      cursor: pointer;
      color: #6BA69B;
    }
  `;

const ReviewsFooter = styled.div`
    box-sizing: border-box;
    width: 80%;
    height: 50px;
    padding: 3px 35%;
    margin: 0px auto 5px;
    background-color: #010A26;
  `;

const RatingsReviews = ({ productId, metaData, ratings, productName }) => {

  const [modalOpen, setModalOpen] = useState(false);

  let openModal = (event) => {
    event.preventDefault();
    setModalOpen(!modalOpen);
  }
  //render return
  return (
    <div id="RatingsAndReviews">
      <Container>
        <Header><h3>Ratings and Reviews</h3></Header>
        <Breakdown>
          <RatingBreakdown productId={productId} metaData={metaData} ratings={ratings} />
        </Breakdown>
        <Reviews>
          <ReviewList productId={productId} />
        </Reviews>
      </Container>
      <ReviewsFooter>
        <OpenAddReview value='AddReview' onClick={openModal}>Add Review</OpenAddReview>
      </ReviewsFooter>
      {modalOpen && <NewReviewModal closeModal={openModal} metaData={metaData} productId={productId} productName={productName}/>}
    </div>
  )
}

export default RatingsReviews;