import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BsStarFill } from 'react-icons/bs';
import StarRating from '../StarRating.jsx';
import { ShowStars } from './ReviewTile.jsx';
import { RightText } from './Styles.jsx';

const BreakdownContainer = styled.div`
  top: 25px;
`;

const RatingStat = styled.span`
  float: right;
`;

const RatingBreakdown = ({ productId, metaData, ratings }) => {

  let characteristics = metaData.characteristics;

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
    <BreakdownContainer>
      <h4>Overall Rating for {productId}</h4>
      <h2> {calculateOverallRating(ratings)} </h2>
      < StarRating ratings={ratings} />
      <h3>Ratings</h3>
      <div>
        {Object.keys(ratings).map(rating => {
          return (
            <div key={`RS${rating}`}>
              {ShowStars(rating)}
              <RatingStat>{ratings[rating]}</RatingStat>
            </div>);
        })}
      </div>

    </BreakdownContainer>
  )
}

export default RatingBreakdown;