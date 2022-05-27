import React, {useEffect, useState} from 'react';
import { FaShare, FaTwitter, FaPinterest, FaFacebook } from 'react-icons/fa';

const ProductionInfo = ({productDetails, currentStyle}) => {
  return (
  <div className='ProductionInfo'>
    {/* ToDo: starts and ratings */}
    <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ &nbsp;&nbsp;<a href='#RatingsAndReviews'>Read All Reviews</a>&nbsp;&nbsp;&nbsp;<FaShare /></p>
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