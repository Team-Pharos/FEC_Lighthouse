import React, { useState } from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStar } from 'react-icons/bs';

const OStars = styled.div`
  display: inline-block;
  position: relative;
`;
const FStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${({percent}) => {
    return percent;
  }}%;
`;

const AddStarRating = ({transferRating}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [newRating, setNewRating] = useState(0);
  const [ratingSelected, setSelected] = useState(false);

  let buildStars = (starType) => {
    let emptyStars = [];
    for (let i = 1; i <= 5; i++) {
      emptyStars.push(<span key={`es${i}`} id={i} >{starType}</span>);
    }
    return emptyStars;
  }

  let handleHover = (event) => {
    event.preventDefault();
    if (!ratingSelected) {
      setHoverRating(event.target.id);
    }
  }

  let ratingClicked = (event) => {
    event.preventDefault();
    setSelected(!ratingSelected);
    setNewRating(event.target.id);
    transferRating(event.target.id);
  }

  return (
    <>
      <OStars onMouseOver={handleHover} onClick={ratingClicked}>
        {buildStars(<BsStar/>)}
        <FStars percent={!ratingSelected ? hoverRating * 20 : newRating * 20}>
          {buildStars(<BsStarFill/>)}
        </FStars>
      </OStars>
    </>
  )
}

export default AddStarRating;