import React, {useEffect, useState} from 'react';

const ProductOverview = ({productDetails}) => {
  return (
    <div className='ProductOverview'>
      <h3>{productDetails.slogan}</h3>
      <p>{productDetails.description}</p>
    </div>
  )
}


export default ProductOverview;