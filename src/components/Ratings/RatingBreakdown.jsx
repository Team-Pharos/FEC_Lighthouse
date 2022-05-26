import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const OverallRating = styled.div`
  font-family: arial;
`;

const RatingBreakdown = ({productId}) => {
  const [metaData, setMetaData] = useState({})

  useEffect(() => {
    axios.get('/getReviewMeta', { params: {id: productId}})
    .then((returnedMeta) => {
      setMetaData(returnedMeta.data);
    })
    .catch( (err) => console.log(err));
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

  let ratings = metaData.ratings || {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  let characteristics = metaData.characteristics;
  console.log(characteristics);

  return(
    <div className="RatingBreakdown">
    <OverallRating>Overall Rating for {productId}</OverallRating>
    <h2> {calculateOverallRating(ratings)}</h2>
    <h3>Ratings</h3>
    <ul>
      {Object.keys(ratings).map( rating => {
        return <li key={rating}>{rating}: {ratings[rating]}</li>;
      })}
    </ul>
    </div>
  )
}

export default RatingBreakdown;