import React, {useEffect, useState} from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const AddToCart = ({currentStyle}) => {
  const [sizeSelected, setSizeSelector] = useState('');
  const [quantitySelected, setQuantitySelector] = useState('0');
  const [starClicked, setStarClicked] = useState(false);

  console.log('currentStyle', currentStyle);
  console.log('sizeSelected', sizeSelected);

  // useEffect(() => {setSizeSelector('')}, [])
  // useEffect(() => {setQuantitySelector('0')}, [])

  const addToBagHandler = () => {
    alert(`${quantitySelected} ${currentStyle.name} Add to Shopping Cart!`);
  }

  return (
    <div className='AddToCart' >
      <select name="size" defaultValue={'default'} onChange={e => {setSizeSelector(e.target.value)}}>
        <option value="default" disabled hidden>SELECT SIZE</option>
        {Object.keys(currentStyle.skus).map( key => {
          if (currentStyle.skus[key].quantity) {
            return <option key={key} value={key}>{currentStyle.skus[key].size}</option>
          }
        })}
      </select>
      {' '}
      <select name="quantity" disabled={sizeSelected === '' ? true : false} onChange={e => {setQuantitySelector(e.target.value)}}>
        {sizeSelected !== '' && currentStyle.skus[sizeSelected]
          ? (Array.from(Array(Math.min(16, currentStyle.skus[sizeSelected].quantity + 1)).keys())).slice(1).map( key => {
              return <option key={key} value={key} >{key}</option>
            })
          : <option value="default" disabled hidden>-</option>
        }
      </select>
      <br />
      <br />
      <button onClick={addToBagHandler}>ADD TO BAG 🛍</button>
      {' '}
      <button onClick={() => {setStarClicked(pre => {return !pre})}}>{starClicked ? <FaStar /> : <FaRegStar /> }</button>
    </div>
  )
}

export default AddToCart;