import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RightText, Thumbnail, TruncBody, Tile, Stars } from './Styles.jsx';
import { FaCheckSquare } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import moment from 'moment';
import axios from 'axios';

export const ShowStars = (rating) => {
  let stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<Stars key={i}><BsStarFill /></Stars>);
  }
  return (stars);
}

const ReviewTile = ({ review }) => {
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [helpfulMarked, setHelpfulMarked] = useState(false);
  const [reported, setReported] = useState(false);

  let bodyView, check;
  let recommended = review.recommend;

  useEffect(() => {
    setHelpfulCount(review.helpfulness)
  }, []);

  let helpfulClick = (event) => {
    event.preventDefault();
    if (!helpfulMarked) {
      axios.put('/helpfulReview', {
        'review_id': review.review_id
      })
        .then(() => {
          setHelpfulCount(helpfulCount + 1);
          setHelpfulMarked(true);
        })
        .catch(err => console.log(err));
    }
  }

  let reportClick = (event) => {
    event.preventDefault();
    axios.put('/reportReview', {
      'review_id': review.review_id
    })
      .then(() => {
        setReported(true);
      })
      .catch(err => console.log(err));
  }

  if (review.body.length > 250) {
    bodyView = <TruncBody><p>{review.body}</p></TruncBody>
  }

  if (review.body.length <= 250) {
    bodyView = <div><p>{review.body}</p></div>
  }

  recommended ? check = <span><FaCheckSquare /></span> : check = <span></span>;

  return (
    <Tile>
      { !reported ?
      <>
      {ShowStars(review.rating)}
      <RightText>
        {check} {review.reviewer_name} {moment(review.date).format('MMMM DD, YYYY')}
      </RightText>
      <div><h4>{review.summary}</h4></div>
      <div>{bodyView}</div>
      <div>
        {review.photos.map((photo) => {
          <Thumbnail src={photo.url} />
        })}
      </div>
      <div>
        <p>{review.response}</p>
      </div>
      <span onClick={helpfulClick}>Helpful? {helpfulCount}</span>
      <RightText onClick={reportClick}>report</RightText>
      </> :
      <></>
      }
    </Tile>
  )
}

export default ReviewTile;