import React, {useEffect, useState} from 'react';
import {Img, ImgMini, Arrow} from './OverviewStyledCom.jsx';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaExpand } from 'react-icons/fa';
import ImageModal from './ImageModal.jsx';
import ImageCarousel from './ImageCarousel.jsx';

const ImageGallery = ({currentStyle}) => {

  const [expanded, setExpanded] = useState(false);

  return (
  <div className='ImageGallery'>
    <ImageCarousel  currentStyle={currentStyle} setExpanded={setExpanded} expanded={expanded}/>
    {expanded ? <ImageModal setExpanded={setExpanded}>
    <ImageCarousel  currentStyle={currentStyle} setExpanded={setExpanded} expanded={expanded}/>
    </ImageModal> : <></>}

  </div>)
}


export default ImageGallery;