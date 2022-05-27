import React from 'react';
import { BsStarFill } from "react-icons/bs";

const StarRating = ({ratings}) => {

  let calculateOverallRating = (ratingsObject) => {
    let numVotes = 0;
    let totalScore = 0;

    for (let rating in ratingsObject) {
      numVotes += Number(ratingsObject[rating]);
      totalScore += rating * ratingsObject[rating];
    }

    return (numVotes === 0) ? 5 : (totalScore / numVotes).toFixed(1);
  };

  let calculateStarFill = (ratingsObject) => {
    let avgRating = calculateOverallRating(ratingsObject);
    let percentage = Math.round((avgRating / 5) * 100);
    return Math.round(percentage / 5) * 5;
  }

  return (
    <div>
        <span>Stars = {calculateStarFill(ratings)}%</span>
    </div>
  )

};

export default StarRating;