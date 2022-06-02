import React, {useEffect, useState} from 'react';

const Features = ({productDetails}) => {
  return (
  <div className='Features' onClick={() => {console.log('Features get clicked')}}>
    {productDetails.features.map( feature => {
      return <p key={feature.feature}>{`✓ ${feature.feature} : ${feature.value}`}</p>
    })}
  </div>
  )
}


export default Features;