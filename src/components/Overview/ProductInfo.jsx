import React, {useEffect, useState} from 'react';

const ProductionInfo = ({productDetails, currentStyle}) => {
  return (
  <div className='ProductionInfo'>
    {/* ToDo: starts and ratings */}
    <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ <a href=''>Read All Reviews</a></p>
    {/* ToDo: 3 SocialMedia icon */}
    <p>{productDetails.category}</p>
    <p>{productDetails.name}</p>
    {currentStyle
    ? <span>${currentStyle.original_price}</span>
    : <></>}

  </div>
  )
}

export default ProductionInfo;