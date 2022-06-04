import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import StarRating from "../StarRating.jsx";
import { ShowStars } from "./ReviewTile.jsx";
import Scale from "./Scale.jsx";
import CharacteristicsScale from "./CharacteristicsScale.jsx";
import {
  BreakdownContainer,
  RatingStat,
  RatingValues,
  RightText,
} from "./Styles.jsx";

const RatingBreakdown = ({
  productId,
  metaData,
  ratings,
  numOfReviews,
  sortReviews,
}) => {
  let characteristics = metaData.characteristics;
  if (characteristics !== undefined) {
    var fit = characteristics.Fit || "";
    var width = characteristics.Width || "";
    var length = characteristics.Length || "";
    var comfort = characteristics.Comfort || "";
    var quality = characteristics.Quality || "";
  }

  let charBreakdown =
    characteristics !== undefined ? (
      <>
        {!!fit && (
          <div>
            <span>
              <b>Fit </b>
            </span>{" "}
            <br />
            <CharacteristicsScale value={Number(fit.value).toFixed(1)} />
            <span>too small</span>
            <RightText>too big</RightText> <br />
          </div>
        )}
        {!!width && (
          <div>
            <span>
              <b>Width </b>
            </span>{" "}
            <br />
            <CharacteristicsScale value={Number(width.value).toFixed(1)} />
            <span>too narrow</span>
            <RightText>too wide</RightText> <br />
          </div>
        )}
        {!!length && (
          <div>
            <span>
              <b>Length </b>
            </span>{" "}
            <br />
            <CharacteristicsScale value={Number(length.value).toFixed(1)} />
            <span>too short</span>
            <RightText>too long</RightText> <br />
          </div>
        )}
        {!!comfort && (
          <div>
            <span>
              <b>Comfort </b>
            </span>{" "}
            <br />
            <CharacteristicsScale value={Number(comfort.value).toFixed(1)} />
            <span>uncomfortable</span>
            <RightText>comfortable</RightText> <br />
          </div>
        )}
        {!!quality && (
          <div>
            <span>
              <b>Quality </b>
            </span>{" "}
            <br />
            <CharacteristicsScale value={Number(quality.value).toFixed(1)} />
            <span>poor</span>
            <RightText>great</RightText> <br />
          </div>
        )}
      </>
    ) : (
      <></>
    );

  let calculateOverallRating = (ratingsObject) => {
    let totalScore = 0;

    for (let rating in ratingsObject) {
      totalScore += rating * ratingsObject[rating];
    }

    return numOfReviews === 0 ? 5 : (totalScore / numOfReviews).toFixed(1);
  };

  let ratingsClick = (event) => {
    event.preventDefault();
    let filter = event.target.id.substring(1);
    sortReviews(filter);
  };

  return (
    <BreakdownContainer>
      <h2> {calculateOverallRating(ratings)} </h2>
      <StarRating ratings={ratings} />
      <h3>Ratings</h3>
      <div>
        {Object.keys(ratings).map((rating) => {
          return (
            <div onClick={ratingsClick}>
              <RatingValues key={`RS${rating}`} id={`R${rating}`}>
                {ShowStars(rating)}
                <RatingStat>{ratings[rating]}</RatingStat>
                <Scale total={numOfReviews} amount={ratings[rating]} />
              </RatingValues>
            </div>
          );
        })}
      </div>
      {charBreakdown}
    </BreakdownContainer>
  );
};

export default RatingBreakdown;
