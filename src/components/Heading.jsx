import React, { useEffect, useState } from "react";
import { CompanyHeading, InnerDiv, CompanyTitle, CompanyLogo } from '../../styles/SiteStyles.jsx';
import {FaShoppingCart} from 'react-icons/fa';

const Heading = () => {
  return (
  <CompanyHeading>
    <InnerDiv>
      <CompanyTitle>Pharos</CompanyTitle>
    </InnerDiv>
  </CompanyHeading>
  )
}

export default Heading;