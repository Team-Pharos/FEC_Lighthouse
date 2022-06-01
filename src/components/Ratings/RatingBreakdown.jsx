import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BsStarFill } from 'react-icons/bs';
import StarRating from '../StarRating.jsx';
import { ShowStars } from './ReviewTile.jsx';
import { BreakdownContainer, RatingStat, RatingValues } from './Styles.jsx';

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
        {!!fit && <div><span>Fit: {Number(fit.value).toFixed(1)}</span></div>}
        {!!width && <div><span>Width: {Number(width.value).toFixed(1)}</span></div>}
        {!!length && <div><span>Length: {Number(length.value).toFixed(1)}</span></div>}
        {!!comfort && <div><span>Comfort: {Number(comfort.value).toFixed(1)}</span></div>}
        {!!quality && <div><span>Quality: {Number(quality.value).toFixed(1)}</span></div>}
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
    <BreakdownContainer>
      <h2> {calculateOverallRating(ratings)} </h2>
      < StarRating ratings={ratings} />
      <h3>Ratings</h3>
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
    </BreakdownContainer>
  )
}

export default RatingBreakdown;