import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const OverallRating = styled.div`
  font-family: arial;
`;

const RatingBreakdown = ({productId}) => {
  const [metaData, setMetaData] = useState({})

  let ratings = metaData.ratings || {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

  useEffect(() => {
    axios.get('/getReviewMeta', { params: {id: productId}})
      .then((returnedMeta) => {
        setMetaData(returnedMeta.data);
        console.log(returnedMeta.data);
      })
      .catch( (err) => console.log(err));
  }, []);


  return(
    <div className="RatingBreakdown">
    <OverallRating>Overall Rating for {productId}</OverallRating>
    <h2>OVERALL RATING</h2>
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