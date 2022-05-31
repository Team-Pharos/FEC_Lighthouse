import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CenterDiv, RelatedContent, Span, QuestionScrollBar, TitleTile, SectionTitle, ProductTitle, SubTitle, Description, Button, ProductCard } from '../Questions/Styles.jsx';

const ProductCardEntry = ({ relatedItem }) => {

  return (

    <ProductCard className="product-card-ri">
      <div>
        <div><Button className="star">⭐️</Button></div>
        <ProductTitle className="center-text">{relatedItem.name}</ProductTitle>
        <SubTitle className="center-text">{relatedItem}</SubTitle>
      </div>
    </ProductCard>
  );
}

export default ProductCardEntry;