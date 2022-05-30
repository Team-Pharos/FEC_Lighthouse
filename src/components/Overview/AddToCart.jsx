import React, {useEffect, useState, useRef} from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import {AddToCartButton} from './OverviewStyledCom.jsx';

const AddToCart = ({currentStyle}) => {
  const [sizeSelected, setSizeSelector] = useState('default');
  const [quantitySelected, setQuantitySelector] = useState('1');
  const [starClicked, setStarClicked] = useState(false);
  let inputElement = useRef(null);

  useEffect(() => {setSizeSelector('default')}, [currentStyle])
  useEffect(() => {setQuantitySelector('1')}, [currentStyle])

  let totalQuantity = 0;
  for (let key in currentStyle.skus) {
    totalQuantity += Number(currentStyle.skus[key].quantity);
  }

  const addToBagHandler = () => {
    if (sizeSelected === 'default' || sizeSelected === 'none') {
      setSizeSelector('none');
      inputElement.current.click();
    } else {
      alert(`${quantitySelected} ${currentStyle.name} Add to Shopping Cart!`);
    }
  }

  return (
    <div className='AddToCart' >
      <p style={{display: (sizeSelected !== 'none') ? 'none' : '', color: 'red'}}>Please Select Size</p>
      <select
        onClick={() => {}}
        id='sizeSelector'
        ref={inputElement}
        autoFocus={true}
        name="size"
        defaultValue={'default'}
        onChange={e => {setSizeSelector(e.target.value)}}
        disabled={Object.keys(currentStyle.skus)[0] === 'null' || totalQuantity === 0}
      >
        {(Object.keys(currentStyle.skus)[0] !== 'null' && totalQuantity !== 0)
          ? <option value="default" >SELECT SIZE</option>
          : <option value="default" >OUT OF STOCK</option>
        }
        {Object.keys(currentStyle.skus).map( key => {
          if (currentStyle.skus[key].quantity) {
            return <option key={key} value={key}>{currentStyle.skus[key].size}</option>
          }
        })}
      </select>
      {' '}
      <select
        name="quantity"
        defaultValue={'default'}
        disabled={sizeSelected === 'default' ? true : false}
        onChange={e => {setQuantitySelector(e.target.value)}}
      >
        {sizeSelected !== 'default' && currentStyle.skus[sizeSelected]
          ? (Array.from(Array(Math.min(16, currentStyle.skus[sizeSelected].quantity + 1)).keys())).slice(1).map( key => {
              return <option key={key} value={key} >{key}</option>
            })
          : <option value="default" disabled hidden>-</option>
        }
      </select>
      <br />
      <br />
      <AddToCartButton
        onClick={addToBagHandler}
        disabled={Object.keys(currentStyle.skus)[0] === 'null' || totalQuantity === 0}
      >ADD TO BAG</AddToCartButton>
      {' '}
      <button onClick={() => {setStarClicked(pre => {return !pre})}}>{starClicked ? <FaStar /> : <FaRegStar /> }</button>
    </div>
  )
}

export default AddToCart;