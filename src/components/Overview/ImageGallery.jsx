import React, {useEffect, useState} from 'react';
import {Img, ImgMini, Arrow} from './OverviewStyledCom.jsx';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaExpand } from 'react-icons/fa';
import ImageModal from './ImageModal.jsx';
import ImageCarousel from './ImageCarousel.jsx';

const ImageGallery = ({currentStyle}) => {

  const [expended, setExpended] = useState(false);

  return (
  <div className='ImageGallery'>
    <ImageCarousel  currentStyle={currentStyle} setExpended={setExpended} expended={expended}/>
    {expended ? <ImageModal setExpended={setExpended}>
    <ImageCarousel  currentStyle={currentStyle} setExpended={setExpended} expended={expended}/>
    </ImageModal> : <></>}

  </div>)
}


export default ImageGallery;