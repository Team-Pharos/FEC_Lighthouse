import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedListEntry from './RelatedListEntry.jsx';

const RelatedList = ({ setNewProduct }) => {

  return (
    <div>
      <RelatedListEntry setNewProduct={setNewProduct}></RelatedListEntry>
    </div>
  )
}

export default RelatedList;