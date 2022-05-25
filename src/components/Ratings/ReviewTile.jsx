import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 3px;
`;

const ReviewTile = ({review}) => {

  if (review.body.length > 250) {

  }

  return (
    <>
      <h4>Rating: {review.rating}</h4>
      <h5>
        Reviewer: {review.reviewer_name} Date: {review.date}
        </h5>
      <h4>Summary: {review.summary}</h4>
      <p>{review.body}</p>
      <div>
        {review.photos.map( (photo) => {
          <Thumbnail src={photo.url}/>
        })}
      </div>
    </>
  )
}

export default ReviewTile;