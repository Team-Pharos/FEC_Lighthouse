import React, {useState, useEffect} from 'react';

const ComparisonModal = ({productId, productDetails}) => {
  return (
    <div>
      <h1>Comparison Modal</h1>
      <table className="comparison-modal">
        <thead>
          <tr>
            <th>Current Product</th>
            <th>Characteristic</th>
            <th>Compared Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productDetails.name}</td>
            <td>Value</td>
            <td>Value</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonModal;