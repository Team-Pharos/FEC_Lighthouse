import React, { useState } from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./Ratings/RatingBreakdown.jsx";
import NewReviewModal from "./NewReviewModal.jsx";
import {
  Input,
  OuterModal,
  InnerModal,
  ModalTitle,
  SectionTitle,
  PrimaryButton,
  CenterDiv,
  TitleTile,
  InnerContent,
} from "../Questions/Styles.jsx";

//component styling
const Reviews = styled.div`
  margin: 50px auto;
  float: right;
  width: 60%;
  left: 25%;
  overflow: auto;
`;

const Breakdown = styled.div`
  font-family: "Poppins", sans-serif;
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
  color: #f2daac;
  background-color: #010a26;
  border-radius: 15px 15px 0 0;
`;
const AddReviewButton = styled(PrimaryButton)`
  float: right;
  margin-right: 30%;
`;

const RatingsReviews = ({
  productId,
  metaData,
  ratings,
  productName,
  numOfReviews,
}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [ratingSort, setRatingSort] = useState([]);

  let modalVisible = (event) => {
    event.preventDefault();
    setModalVisibility(!modalVisibility);
  };

  const sortReviews = (filter) => {
    let curFilter = ratingSort.slice();
    if (!ratingSort.includes(filter)) {
      setRatingSort([...ratingSort, filter]);
    } else {
      let ratingIdx = curFilter.indexOf(filter);
      curFilter.splice(ratingIdx, 1);
      setRatingSort(curFilter);
    }
  };

  //render return
  return (
    <CenterDiv>
      <TitleTile id="RatingsAndReviews">
        <SectionTitle>Ratings and Reviews</SectionTitle>
      </TitleTile>
      <InnerContent>
        <Container>
          <Breakdown>
            <RatingBreakdown
              productId={productId}
              metaData={metaData}
              ratings={ratings}
              numOfReviews={numOfReviews}
              sortReviews={sortReviews}
            />
          </Breakdown>
          <Reviews>
            <ReviewList productId={productId} ratingSort={ratingSort} />
          </Reviews>
        </Container>
        <AddReviewButton value="AddReview" onClick={openModal}>
          Add Review
        </AddReviewButton>
      </InnerContent>
      {modalVisibility && (
        <NewReviewModal
          closeModal={openModal}
          metaData={metaData}
          productId={productId}
          productName={productName}
        />
      )}
    </CenterDiv>
  );
};

export default RatingsReviews;
