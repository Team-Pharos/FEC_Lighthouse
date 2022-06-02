import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewModal from './NewReviewModal.jsx';
import { ReviewsFooter, OpenAddReview, Header, Container, Breakdown, Reviews } from '../Styles.jsx';
import { Input, OuterModal, InnerModal, ModalTitle, SectionTitle, PrimaryButton, Button, CenterDiv, TitleTile, ClearFloat, InnerContent } from '../Styles.jsx';

const RatingsReviews = ({ productId, metaData, ratings, productName }) => {

  const [modalOpen, setModalOpen] = useState(false);

  let openModal = (event) => {
    event.preventDefault();
    setModalOpen(!modalOpen);
  }
  //render return
  return (
    <CenterDiv>
      <TitleTile>
        <SectionTitle>Ratings and Reviews</SectionTitle>
      </TitleTile>
      <InnerContent>

        <Breakdown>
          <RatingBreakdown productId={productId} metaData={metaData} ratings={ratings} />
        </Breakdown>
        <Reviews>
          <ReviewList productId={productId} />
        <PrimaryButton value='AddReview' onClick={openModal}>Add Review</PrimaryButton>
        </Reviews>
      </InnerContent>
      {modalOpen && <NewReviewModal closeModal={openModal} metaData={metaData} productId={productId} productName={productName} />}
    </CenterDiv>
  )
}

export default RatingsReviews;