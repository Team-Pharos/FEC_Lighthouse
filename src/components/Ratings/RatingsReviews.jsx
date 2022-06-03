import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewModal from './NewReviewModal.jsx';
//import { Reviews, Breakdown, Container, Header, OpenAddReview, ReviewsFooter } from './Styles.jsx';
import { Input, OuterModal, InnerModal, ModalTitle, SectionTitle, PrimaryButton, Button, CenterDiv, TitleTile, ClearFloat, InnerContent } from '../Questions/Styles.jsx';

//component styling
const Reviews = styled.div`
    margin: 50px auto;
    float: right;
    width: 60%;
    left: 25%;
    overflow: auto;
    `;

const Breakdown = styled.div`
    font-family: 'Poppins', sans-serif;
    float: left;
    position: absolute;
    margin: 20px auto;
    padding: 0 1%;
    width: 25%;
    height: 500px;
    overflow: auto;
  `;

const Container = styled.div`
    border-radius: 15px;
    overflow: auto;
  `;
const Header = styled.div`
    font-family: "Akshar", sans-serif;
    font-size: 20px;
    width: 80%;
    height: 50px;
    position: absolute;
    padding: 1px 1px;
    color: #F2DAAC;
    background-color: #010A26;
    border-radius: 15px 15px 0 0;
  `;
  const AddReviewButton = styled(PrimaryButton)`
    float: right;
    margin-right: 30%;
  `


const RatingsReviews = ({ productId, metaData, ratings, productName }) => {

  const [modalOpen, setModalOpen] = useState(false);

  let openModal = (event) => {
    event.preventDefault();
    setModalOpen(!modalOpen);
  }
  //render return
  return (
    <CenterDiv>
      <TitleTile id='RatingsAndReviews'>
        <SectionTitle>Ratings and Reviews</SectionTitle>
      </TitleTile>
      <InnerContent>
        <Container>
          <Breakdown>
            <RatingBreakdown productId={productId} metaData={metaData} ratings={ratings} />
          </Breakdown>
          <Reviews>
            <ReviewList productId={productId} />
          </Reviews>
        </Container>
        <AddReviewButton value='AddReview' onClick={openModal}>Add Review</AddReviewButton>
      </InnerContent>
      {modalOpen && <NewReviewModal closeModal={openModal} metaData={metaData} productId={productId} productName={productName} />}
    </CenterDiv>
  )
}

export default RatingsReviews;