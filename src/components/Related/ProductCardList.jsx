import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductCardEntry from './ProductCardEntry.jsx';
import { CenterDiv, RelatedContent, Span, QuestionScrollBar, TitleTile, SectionTitle, ProductTitle, SubTitle, Description, Button, ProductCard } from '../Questions/Styles.jsx';

const ProductCardList = ({ relatedItems }) => {

  return (
    <>
      {relatedItems.map((relatedItem) => {
        <ProductCardEntry key={relatedItem.id} relatedItem={relatedItem}></ProductCardEntry>
      })}
    </>
  );
}

export default ProductCardList;