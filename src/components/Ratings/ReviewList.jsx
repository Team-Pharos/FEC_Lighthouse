import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

//Component Styling
const List = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 2px 2px;
`;

const ReviewList = ({ productId }) => {
  //State
  const [reviews, setReviews] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [askToShowMore, setShowMoreVisibility] = useState(true);
  const [sort, setSort] = useState('relevant');

  //state population
  useEffect(() => {
    axios.get('/getReviews', { params: { id: productId } })
      .then((reviews) => {
        setReviews(reviews.data.results);
        setDisplayed(reviews.data.results.slice(0, 2));
      })
      .catch((err) => console.log(err));
  }, []);

  let showMoreClicked = (event) => {
    event.preventDefault();
    setDisplayed(reviews.slice(0, displayed.length + 2));
  };

  return (
    <List>
      {/* <h3>Reviews for {productId}</h3> */}
      <form>
        <h3>Sorted by
          <select value={sort}>
            <option value='relevant'>Relevant</option>
            <option value='newest'>Newest</option>
            <option value='helpful'>Helpful</option>
          </select>
        </h3>
      </form>
      {displayed.map((review => {
        return (<ReviewTile
          review={review}
          key={review.review_id} />)
      }))}
      {askToShowMore ?
        <button onClick={showMoreClicked}>Show More</button> :
        <></>}
    </List>
  )
}

export default ReviewList;