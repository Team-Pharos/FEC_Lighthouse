import React, {useEffect, useState} from "react";

const AddProductCard = ({productId, clickPlus}) => {




  return (
    <div className="add-item-card">
      <h5 >Add Product Card</h5>
      <button onClick={clickPlus}>➕</button>
      <h5 >{productId}</h5>
    </div>
  );
}

export default AddProductCard;