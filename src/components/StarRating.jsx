import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import styled from 'styled-components';
import { RatingsSummary, AnswerTitle, InnerContent, QuestionScrollBar, Input, OuterModal, InnerModal, Span, SpanClicked, QuestionTitle, Button, SubTitle, Description, ClearFloat } from './Styles.jsx';

const OLStars = styled.div`
  display: inline-block;
  position: relative;
  color: #010a26;
`;
const FStars = styled.div`
  color: #010a26;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${({percent}) => {
    return percent;
  }}%;
`;

const StarRating = ({ ratings }) => {


  let calculateOverallRating = (ratingsObject) => {
    let numVotes = 0;
    let totalScore = 0;

    for (let rating in ratingsObject) {
      numVotes += Number(ratingsObject[rating]);
      totalScore += rating * ratingsObject[rating];
    }

    return (numVotes === 0) ? 5 : (totalScore / numVotes).toFixed(1);
  };

  let calculateStarFill = (ratingsObject) => {
    let avgRating = calculateOverallRating(ratingsObject);
    let percentage = Math.round((avgRating / 5) * 100);
    return Math.round(percentage / 5) * 5;
  }

  let buildStars = (starType) => {
    let emptyStars = [];
    for (let i = 1; i <= 5; i++) {
      emptyStars.push(<span key={`bs${i}`}>{starType}</span>);
    }
    return emptyStars;
  }

  return (
    <>
      <OLStars>
        {buildStars(<BsStar/>)}

      <FStars percent={calculateStarFill(ratings)}>
    {buildStars(<BsStarFill/>)}
      </FStars>
      </OLStars>
    </>
  )

};

export default StarRating;