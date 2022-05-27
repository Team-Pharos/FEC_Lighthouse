import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StarRating from '../StarRating.jsx';

const BreakdownContainer = styled.div`
  top: 25px;
`;

export const RatingContext = createContext();

const RatingBreakdown = ({ productId }) => {
  const [metaData, setMetaData] = useState({});
  const [ratings, setRatings] = useState({}
  );


  let characteristics = metaData.characteristics;

useEffect(() => {
  axios.get('/getReviewMeta', { params: { id: productId } })
    .then((returnedMeta) => {
      setMetaData(returnedMeta.data);
      setRatings(returnedMeta.data.ratings)
    })
    .catch((err) => console.log(err));
}, []);

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
    <RatingContext.Provider value={ratings}><StarRating ratings={ratings}/></RatingContext.Provider>

    <h3>Ratings</h3>
    <ul>
      {Object.keys(ratings).map(rating => {
        return <li key={rating}>{rating}: {ratings[rating]}</li>;
      })}
    </ul>
  </BreakdownContainer>
)
}

export default RatingBreakdown;