import React, {useEffect, useState} from 'react';
import {Img, ImgMini, Arrow} from './OverviewStyledCom.jsx';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaExpand } from 'react-icons/fa';
import ImageModal from './ImageModal.jsx';
import ImageCarousel from './ImageCarousel.jsx';

const ImageGallery = ({currentStyle, clickTracking}) => {

  const [expanded, setExpanded] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  return (
  <div
    className='ImageGallery'
    onClick={(e) => {
      clickTracking('ImageGallery', 'Overview', new Date())
      console.log(`ImageGallery get clicked ${new Date()}`)
    }}>
    <ImageCarousel  currentStyle={currentStyle} setExpanded={setExpanded} expanded={expanded} zoomed={zoomed} setZoomed={setZoomed}/>
    {expanded ? <ImageModal setExpanded={setExpanded} zoomed={zoomed} setZoomed={setZoomed}>
    <ImageCarousel  currentStyle={currentStyle} setExpanded={setExpanded} expanded={expanded} zoomed={zoomed} setZoomed={setZoomed}/>
    </ImageModal> : <></>}
  </div>)
}


export default ImageGallery;