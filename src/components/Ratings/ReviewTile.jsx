import React from 'react';
import styled from 'styled-components';
import {RightText, Thumbnail, TruncBody, Tile} from './Styles.jsx';
import { FaCheckSquare } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import moment from 'moment';

const ReviewTile = ({review}) => {

  let bodyView, check;
  let recommended = review.recommend;

  let ShowStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<span key={i}><BsStarFill/></span>);
    }
    return(stars)
  }

  if (review.body.length > 250) {
    bodyView = <TruncBody><p>{review.body}</p></TruncBody>
  }
   if (review.body.length <= 250) {
    bodyView = <div><p>{review.body}</p></div>
  }
  recommended ? check = <span><FaCheckSquare/></span> : check = <span></span>;

  return (
    <Tile>
      {ShowStars(review.rating)}
      <RightText>
        {check} {review.reviewer_name} {moment(review.date).format('MMMM Do YYYY')}
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