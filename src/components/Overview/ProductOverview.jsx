import React, {useEffect, useState} from 'react';
import { FaShare, FaTwitter, FaPinterest, FaFacebook } from 'react-icons/fa';

const ProductOverview = ({productDetails}) => {
  return (
    <div className='ProductOverview'>
      <h3>{productDetails.slogan}&nbsp;&nbsp;<FaFacebook/>&nbsp;&nbsp;<FaTwitter/>&nbsp;&nbsp;<FaPinterest/></h3>
      <p>{productDetails.description}</p>
    </div>
  )
}


export default ProductOverview;