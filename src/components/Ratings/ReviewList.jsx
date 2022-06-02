import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import { RatingsSummary, AnswerTitle, InnerContent, QuestionScrollBar, Input, OuterModal, InnerModal, Span, SpanClicked, QuestionTitle, Button, SubTitle, Description, ClearFloat } from '../Styles.jsx';

//Component Styling


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
  }, []);

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
      <InnerContent>

      {/* <h3>Reviews for {productId}</h3> */}

      <form>
        <RatingsSummary>Sorted by: </RatingsSummary>
          <select value={sort} onChange={(e) => {
            e.preventDefault();
            setSort(e.target.value);
            reSort(e.target.value);
          }}>
            <option value='relevant'>Relevant</option>
            <option value='newest'>Newest</option>
            <option value='helpful'>Helpful</option>
          </select>
      </form>
      <QuestionScrollBar>

      {displayed.map((review => {
        return (<ReviewTile
          review={review}
          key={review.review_id} />)
        }))}
        </QuestionScrollBar>
      {askToShowMore ?
        <Button onClick={showMoreClicked}>Show More</Button> :
        <></>}

        </InnerContent>
  )
}

export default ReviewList;