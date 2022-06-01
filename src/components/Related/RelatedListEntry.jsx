import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedListEntry = ({ setNewProduct }) => {

  return (
    <div>
      <h4>Product Name</h4>
      <p>Product Description</p>
      <div>
        <img />
      </div>
      <h5>Product Price</h5>
    </div>
  )
}

export default RelatedListEntry;