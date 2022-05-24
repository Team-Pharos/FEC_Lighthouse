import React, {useEffect, useState} from 'react';

const Features = ({productDetails}) => {
  return (
  <div className='Features'>
    <h1>Features</h1>
    {productDetails.features.map( feature => {
      {/* return <p>{`✓ ${feature.feature} : ${feature.value}`}</p> */}
    })}
  </div>
  )
}


export default Features;