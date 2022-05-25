import  React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

//Component Styling


const ReviewList = ({productId}) => {
  //State
  const [reviews, setReviews] = useState([]);
  const [displayed, setDisplayed] = useState([]);

  //state population
  useEffect(() => {
    axios.get('/getReviews', { params: {id: productId}})
      .then((reviews) => {
        setReviews(reviews.data.results);
        setDisplayed(reviews.data.results.slice(0,2));
      })
      .catch( (err) => console.log(err));
  }, []);

  let showMoreClicked = (event) => {
    event.preventDefault();
    setDisplayed(reviews.slice(0, displayed.length + 2));
  };

  //render return
  return (
    <div>
    <h3>Reviews for {productId}</h3>
    <h3>Sorted by Relevance</h3>
      {displayed.map((review => {
        return(<ReviewTile review={review} key={review.review_id}/>)
      }))}
      <button onClick={showMoreClicked}>Show More</button>
    </div>
  )
}

export default ReviewList;