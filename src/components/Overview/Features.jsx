import React, {useEffect, useState} from 'react';

const Features = ({productDetails}) => {
  console.log(productDetails.features);
  return (
  <>
    <h1>Features</h1>
    {productDetails.features.map( feature => {
      return <h6>{`✓ ${feature.feature} : ${feature.value}`}</h6>
    })}
  </>
  )
}


export default Features;