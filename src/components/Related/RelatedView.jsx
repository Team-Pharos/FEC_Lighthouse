import React, { useState } from 'react';
import axios from 'axios';
import {CenterDiv, TitleTile, SectionTitle, RelatedContent} from '../Questions/Styles.jsx';
import RelatedList from './RelatedList.jsx';

const RelatedView = ({ relatedIds, setNewProduct }) => {

  return (
    <CenterDiv>
      <TitleTile>
    <SectionTitle>Related Products</SectionTitle>
      </TitleTile>
    <RelatedContent>
      <RelatedList relatedProducts={relatedIds} setNewProduct={setNewProduct}></RelatedList>
    </RelatedContent>
    </CenterDiv>
  )
}

export default RelatedView;