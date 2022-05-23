import React, {useEffect, useState} from 'react';

const ProductionInfo = ({productDetails}) => {
  return (
  <>
    <h1>ProductionInfo</h1>
    {/* ToDo: starts and ratings */}
    {/* ToDo: 3 SocialMedia icon */}
    <h3>{productDetails.category}</h3>
    <h2>{productDetails.name}</h2>

    {/* ToDo: price dynamically update with styles */}
    <p>${productDetails.default_price}</p>
  </>
  )
}


export default ProductionInfo;