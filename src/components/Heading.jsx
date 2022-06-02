import React, { useEffect, useState } from "react";
import { CompanyHeading, InnerDiv, CompanyTitle, CompanyLogo } from '../../styles/SiteStyles.jsx';
import {FaShoppingCart} from 'react-icons/fa';

const Heading = ({quantityInCart}) => {
  return (
  <CompanyHeading>
    <InnerDiv>
      <CompanyTitle>Pharos</CompanyTitle>
      <CompanyLogo src='/assets/PharosLogo.png'/>
      <div className='shoppingCart'>
        <span className='shoppingCartNum'>{quantityInCart}</span>
        <FaShoppingCart className='shoppingCart'/>
      </div>
    </InnerDiv>
  </CompanyHeading>
  )
}

export default Heading;
