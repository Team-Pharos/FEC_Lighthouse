import React, { useState, useEffect } from "react";
import { RelatedList, ProductTitle, SubTitle, Description, Button, ProductCard } from '../Questions/Styles.jsx';
import ProductCardEntry from './ProductCardEntry.jsx';
import axios from 'axios';

const ProductCardList = ({ relatedIDs }) => {

  console.log(relatedIDs);

  return (
    <RelatedList>
      {relatedIDs.map((relatedID) => {
        console.log(relatedID);
        <ProductCardEntry key={relatedID} relatedID={relatedID}></ProductCardEntry>
      })}
    </RelatedList>
  );
}

export default ProductCardList;