import React, {useEffect, useState} from 'react';

const ProductOverview = ({productDetails}) => {
  console.log(productDetails);
  return (
    <>
      <h1>ProductOverview</h1>
      <h3>{productDetails.slogan}</h3>
      <p>{productDetails.description}</p>

    </>
  )
}


export default ProductOverview;