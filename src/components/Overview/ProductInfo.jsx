import React, { useEffect, useState } from 'react';
import { FaShareSquare, FaTwitter, FaPinterest, FaFacebook } from 'react-icons/fa';
import { Tooltip } from './Tooltip.jsx';
import StarRating from '../StarRating.jsx';
import { ProductTitle, InnerCategory, Category, Input, AnswerTitle, OuterModal, InnerModal, ModalTitle, SectionTitle, PrimaryButton, Button, CenterDiv, TitleTile, ClearFloat, InnerContent, Span } from '../Styles.jsx';

const ProductionInfo = ({ productDetails, currentStyle, ratings, numOfReviews }) => {
  return (
    <div className='ProductionInfo'>
      <StarRating
        ratings={ratings}
        style={{ display: numOfReviews === 0 ? 'none' : '' }}
      />
      &nbsp;&nbsp;&nbsp;
      <a
        className='linkToReviews'
        href='#RatingsAndReviews'
        style={{ display: numOfReviews === 0 ? 'none' : '' }}
      ><Span>
          Read All {numOfReviews} Reviews
        </Span>
      </a>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <Tooltip
        content={<>
          <FaFacebook
            className='reactIcon'
            onClick={() => { open('https://www.facebook.com') }}
          // style={{color: '#68a69b'}}
          />&nbsp;
          <FaTwitter
            className='reactIcon'
            onClick={() => { open('https://twitter.com') }}
          // style={{color: '#68a69b'}}
          />&nbsp;
          <FaPinterest
            className='reactIcon'
            onClick={() => { open('https://www.pinterest.com/') }}
          // style={{color: '#68a69b'}}
          />
        </>}>
        <FaShareSquare className='reactIcon' />
      </Tooltip>

      <Category>
        <InnerCategory>
          <AnswerTitle>{productDetails.category}</AnswerTitle>
        </InnerCategory>
      </Category>

      <ProductTitle>{productDetails.name}</ProductTitle>
      {currentStyle
        ? <span style={{ textDecoration: currentStyle.sale_price ? 'line-through' : '' }}>${currentStyle.original_price}</span>
        : <></>}
      {' '}
      {currentStyle && currentStyle.sale_price
        ? <span style={{ color: '#AB4A27', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;${currentStyle.sale_price}</span>
        : <></>}
    </div>
  )
}

export default ProductionInfo;