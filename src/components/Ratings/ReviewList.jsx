import  React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({productId}) => {
  //State
  const [reviews, setReviews] = useState([]);

  //Styled Components

  //state population
  useEffect(() => {
    axios.get('/getReviews', { params: {id: productId}})
      .then(reviews => {
        setReviews(reviews.data.results);
      })
      .catch( err => console.log(err));
  }, []
  )

  //render return
  return (
    <>
    <h3>Sorted by Relevance</h3>
      {reviews.map((review => {
        return(<ReviewTile review={review} key={review.review_id}/>)
      }))}
    </>
  )
}

export default ReviewList;