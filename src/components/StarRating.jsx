import React, { useContext } from 'react';
import { BsStarFill } from "react-icons/bs";
import RatingContext from './Ratings/RatingBreakdown.jsx';

const StarRating = ({ratings}) => {

  var rating = useContext(RatingContext);
  //console.log(rating);

  let calculateOverallRating = (ratingsObject) => {
    let numVotes = 0;
    let totalScore = 0;

    for (let rating in ratingsObject) {
      numVotes += Number(ratingsObject[rating]);
      totalScore += rating * ratingsObject[rating];
    }

    return (numVotes === 0) ? 5 : (totalScore / numVotes).toFixed(1);
  };

  let calculateStarFill = () => {
    let avgRating = calculateOverallRating(ratings);
    let percentage = Math.round((avgRating / 5) * 100);
    return Math.round(percentage / 5) * 5;
  }

  return (
    <div>
      <span>Stars = {calculateStarFill()}%</span>
    </div>
  )

};

export default StarRating;