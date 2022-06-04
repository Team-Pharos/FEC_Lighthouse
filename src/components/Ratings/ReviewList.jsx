import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

//Component Styling
const List = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 2px 2px;
  height: 500px;
  overflow: auto;
`;

const ReviewList = ({ productId }) => {
  //State
  const [reviews, setReviews] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [askToShowMore, setShowMoreVisibility] = useState(true);
  const [sort, setSort] = useState('relevant');

  let updateList = (data) => {
    setReviews(data.results);
    setDisplayed((data.results.slice(0, 2)));
  }

  //state population
  useEffect(() => {
    axios.get('/getReviews', { params: { id: productId } })
      .then((reviews) => {
        updateList(reviews.data)
      })
      .catch((err) => console.log(err));
  }, [productId]);

  let showMoreClicked = (event) => {
    event.preventDefault();
    setDisplayed(reviews.slice(0, displayed.length + 2));
  };

  let reSort = (sortType) => {
    axios.get('/getReviews', {params: { id: productId, sort: sortType}})
      .then((reviews) => {updateList(reviews.data)})
      .catch((err) => console.log(err));
  }

  return (
    <List>
      <form>
        <h3>Sorted by
          <select value={sort} onChange={(e) => {
          e.preventDefault();
          setSort(e.target.value);
          reSort(e.target.value);
          }}>
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