import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BsStarFill } from 'react-icons/bs';
import StarRating from '../StarRating.jsx';
import { ShowStars } from './ReviewTile.jsx';
import { BreakdownContainer, RatingStat, RatingValues } from '../Styles.jsx';
import { RatingsSummary, AnswerTitle, InnerContent, QuestionScrollBar, Input, OuterModal, InnerModal, Span, SpanClicked, QuestionTitle, Button, SubTitle, Description, ClearFloat } from '../Styles.jsx';

const RatingBreakdown = ({ productId, metaData, ratings }) => {

  // console.log({metaData});
  // console.log({ratings});

  let characteristics = metaData.characteristics;
  if (characteristics !== undefined) {
    var fit = characteristics.Fit || '';
    var width = characteristics.Width || '';
    var length = characteristics.Length || '';
    var comfort = characteristics.Comfort || '';
    var quality = characteristics.Quality || '';
  }
  let charBreakdown = (
    characteristics !== undefined ?
      <>
        {!!fit && <div><AnswerTitle>Fit: {Number(fit.value).toFixed(1)}</AnswerTitle></div>}
        {!!width && <div><AnswerTitle>Width: {Number(width.value).toFixed(1)}</AnswerTitle></div>}
        {!!length && <div><AnswerTitle>Length: {Number(length.value).toFixed(1)}</AnswerTitle></div>}
        {!!comfort && <div><AnswerTitle>Comfort: {Number(comfort.value).toFixed(1)}</AnswerTitle></div>}
        {!!quality && <div><AnswerTitle>Quality: {Number(quality.value).toFixed(1)}</AnswerTitle></div>}
      </> :
      <></>
  );

  let calculateOverallRating = (ratingsObject) => {
    //let average = 0;
    let numVotes = 0;
    let totalScore = 0;

    for (let rating in ratingsObject) {
      numVotes += Number(ratingsObject[rating]);
      totalScore += rating * ratingsObject[rating];
    }
    return (numVotes === 0) ? 5 : (totalScore / numVotes).toFixed(1);
  };

  return (
    <InnerContent>
      <RatingsSummary> {calculateOverallRating(ratings)} </RatingsSummary>
      < StarRating ratings={ratings} />
      <QuestionTitle>Ratings</QuestionTitle>
      <div>
        {Object.keys(ratings).map(rating => {
          return (
            <RatingValues key={`RS${rating}`}>
              {ShowStars(rating)}
              <RatingStat>{ratings[rating]}</RatingStat>
            </RatingValues>);
        })}
      </div>
        {charBreakdown}
    </InnerContent>
  )
}

export default RatingBreakdown;