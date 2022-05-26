import React from 'react';
import styled from 'styled-components';
import {RightText} from './Styles.jsx';

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
  recommended ? check = <span>✅</span> : check = <span></span>;

  return (
    <Tile>
      <h4>{review.rating}</h4>
      <RightText>
        {check} {review.reviewer_name} {review.date}
      </RightText>
      <div><h4>{review.summary}</h4></div>
      <div>{bodyView}</div>
      <div>
        {review.photos.map( (photo) => {
          <Thumbnail src={photo.url}/>
        })}
      </div>
      <div>
        <p>Response: {review.response}</p>
      </div>
        <span>Helpfulness: {review.helpfulness}</span>
        <RightText>report</RightText>
    </Tile>
  )
}

export default ReviewTile;