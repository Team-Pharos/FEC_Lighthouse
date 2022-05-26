import React, {useEffect, useState} from 'react';

const ProductionInfo = ({productDetails, currentStyle}) => {
  return (
  <div className='ProductionInfo'>
    {/* ToDo: starts and ratings */}
    <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ <a href=''>Read All Reviews</a></p>
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