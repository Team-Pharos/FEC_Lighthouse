import  React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({productId}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('/getReviews', { params: {id: productId}})
      .then(reviews => {
        setReviews(reviews.data.results);
      })
      .catch( err => console.log(err));
  }, []
  )

  return (
    <>
      {reviews.map((review => {
        return(<ReviewTile review={review} key={review.review_id}/>)
      }))}
    </>
  )
}

export default ReviewList;