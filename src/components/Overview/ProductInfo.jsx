import React, {useEffect, useState} from 'react';
import { FaShareSquare, FaTwitter, FaPinterest, FaFacebook } from 'react-icons/fa';
import {Tooltip} from './Tooltip.jsx';
import StarRating from '../StarRating.jsx';

const ProductionInfo = ({productDetails, currentStyle, ratings, numOfReviews}) => {
  return (
  <div className='ProductionInfo'>
   <StarRating
    ratings={ratings}
    style={{display: numOfReviews === 0 ? 'none' : ''}}
  />
    &nbsp;&nbsp;
    <a
      className='linkToReviews'
      href='#RatingsAndReviews'
      style={{display: numOfReviews === 0 ? 'none' : ''}}
    >
      Read All {numOfReviews} Reviews
    </a>
    &nbsp;&nbsp;&nbsp;
    <Tooltip
      content={<>
        <FaFacebook/>&nbsp;<FaTwitter/>&nbsp;<FaPinterest/>
      </>}
    >
      <FaShareSquare />
    </Tooltip>

    {/* ToDo: 3 SocialMedia icon */}
    <h3>{productDetails.category}</h3>

    <h2>{productDetails.name}</h2>
    {currentStyle
    ? <span style={{textDecoration: currentStyle.sale_price ? 'line-through' : ''}}>${currentStyle.original_price}</span>
    : <></>}
    {' '}
    {currentStyle && currentStyle.sale_price
    ? <span style={{color: 'red'}}>&nbsp;&nbsp;&nbsp;${currentStyle.sale_price}</span>
    : <></>}
  </div>
  )
}

export default ProductionInfo;