import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 3px;
`;

const truncatedBody = styled.div`
  height: 75px;
  overflow: auto;
`;

const Tile = styled.div`
border-bottom: 1px solid black;
`;

const ReviewTile = ({review}) => {

  let bodyView, check;
  let recommended = review.recommend;

  if (review.body.length > 250) {
    bodyView = <truncatedBody><p>{review.body}</p></truncatedBody>
  }
   if (review.body.length <= 250) {
    bodyView = <div><p>{review.body}</p></div>
  }
  recommended ? check = <p>✅</p> : check = <p></p>;

  return (
    <Tile>
      <h4>Rating: {review.rating}</h4>
      <h5>
        Recommended: {check} Reviewer: {review.reviewer_name} Date: {review.date}
        </h5>
      <h4>Summary: {review.summary}</h4>
      {bodyView}
      <div>
        {review.photos.map( (photo) => {
          <Thumbnail src={photo.url}/>
        })}
      </div>
      <div>
        <p>Response: {review.response}</p>
      </div>
        <span>Helpfulness: {review.helpfulness}</span>
        <span>      report</span>
    </Tile>
  )
}

export default ReviewTile;