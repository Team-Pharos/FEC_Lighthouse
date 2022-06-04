import React, {useEffect, useState} from 'react';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaExpand } from 'react-icons/fa';
import ImageModal from './ImageModal.jsx';
import styled from 'styled-components';
import {Img, ImgMini, Arrow} from './OverviewStyledCom.jsx';

const ImageCarousel = ({currentStyle, setExpanded, expanded, zoomed, setZoomed}) => {

  const urlArr = [];
  const miniUrlArr = [];

  for (let obj of currentStyle.photos) {
    urlArr.push(obj.url);
    miniUrlArr.push(obj.thumbnail_url);
  }

  const [imageInd, setImage] = useState(0);
  const [position, setPosition] = useState(['0px', '0px'])

  const mouseMoveHandler = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - 1200);
    const y = (500 - e.pageY) * 1.4
    setPosition([`${x}px`, `${y}px`]);
  }


  return (
  <div className='ImageCarousel'>
    <div className='gallery'>
    <div className={expanded ? 'ExpThumbnail' : 'thumbnail'}>
      <Arrow
        aria-label='upArrow'
        className={zoomed ? 'ZoomArrow' : 'upArrow'}
        style={{visibility: imageInd !== 0 ? 'visible' : 'hidden' }}
        onClick={() => {setImage(imageInd - 1)}}
      ><FaAngleUp /></Arrow>
      <br/>

      {miniUrlArr.map((img, i) => {
        return (
          <div
            key={img}
            style={{display: (i > imageInd + 6 || (i < imageInd && i < miniUrlArr.length - 7))? 'none' : ''}}>
            <ImgMini
              alt='product thumbnail image'
              className={zoomed ? 'ZoomImgMini' : expanded ? 'ExpImgMini' : ''}
              src={img}
              style={{
                border: img === miniUrlArr[imageInd] ? 'solid' : ''
              }}
              onClick={() => {setImage(i)}}/>
            <br />
          </div>)
      })}

      <Arrow
        aria-label='downArrow'
        className={zoomed ? 'ZoomArrow' : 'downArrow'}
        style={{visibility: imageInd < miniUrlArr.length - 1 ? 'visible' : 'hidden' }}
        onClick={() => {setImage(imageInd + 1)}}
        ><FaAngleDown /></Arrow>
    </div>

      <Arrow
        aria-label='LeftArrow'
        className={zoomed ? 'ZoomArrow' : expanded ? 'leftArrowExp' : 'leftArrow'}
        style={{visibility: imageInd !== 0 ? 'visible' : 'hidden' }}
        onClick={() => {setImage(imageInd - 1)}}
      ><FaAngleLeft /></Arrow>

      <Img
        data-testid='testImage'
        alt='product image'
        className={zoomed ? 'ZoomImg' : expanded ? 'ExpImg' : ''}
        src={urlArr[imageInd]}
        onClick={() => {
          if (zoomed) {
            setZoomed(false);
          } else if (expanded) {
            setZoomed(true);
          } else {
            setExpanded(true);
          }
        }}
        onMouseMove={zoomed ? mouseMoveHandler : () => {}}
        style={{
          position: zoomed ? 'absolute' : '',
          right: zoomed ? position[0] : '',
          top: zoomed ? position[1] : '',
        }}
      />
      <Arrow
        aria-label='rightArrow'
        className={zoomed ? 'ZoomArrow' : expanded ? 'rightArrowExp' : 'rightArrow'}
        style={{visibility: imageInd < urlArr.length - 1 ? 'visible' : 'hidden' }}
        onClick={() => {setImage(imageInd + 1)}}
        ><FaAngleRight /></Arrow>
    </div>

  </div>)
}


export default ImageCarousel;