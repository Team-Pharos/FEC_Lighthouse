import React, {useEffect, useState} from "react";

const AddProductCard = ({productId, clickPlus}) => {




  return (
    <div>
      <div>
      <button onClick={clickPlus}>➕</button>
      <h5 >Add Product Card</h5>
      </div>
    </div>
  );
}

export default AddProductCard;