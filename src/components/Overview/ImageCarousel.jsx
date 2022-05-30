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
    // console.log(e.pageX);
    // console.log(e.pageY);

    // bottom: 2100; left: -434; right: 2065; top: -900
    // bottom: 2375; left: -352.5; right: 1875; top: -712.5
    // center-vertical = 600; center-hor: 815
    const { left, top, width, height } = e.target.getBoundingClientRect()
    // console.log(left, top, width, height);
    // horizontal
    // let centerX = right - (right - left) / 2
    const x = (e.pageX - 1200);
    // console.log('x', x)
    //vertical
    // let centerY = bottom - (bottom - top) / 2
    const y = (500 - e.pageY) * 1.4
    // console.log('y', y)
    setPosition([`${x}px`, `${y}px`]);
    // console.log(position);
  }


  return (
  <div className='ImageCarousel'>

    {/* left and right */}
    <div className='gallery'>

      {/* up and down */}
    <div className={expanded ? 'ExpThumbnail' : 'thumbnail'}>
      <Arrow
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
        className={zoomed ? 'ZoomArrow' : 'downArrow'}
        style={{visibility: imageInd < miniUrlArr.length - 1 ? 'visible' : 'hidden' }}
        onClick={() => {setImage(imageInd + 1)}}
        ><FaAngleDown /></Arrow>
    </div>

      <Arrow
        className={zoomed ? 'ZoomArrow' : expanded ? 'leftArrowExp' : 'leftArrow'}
        style={{visibility: imageInd !== 0 ? 'visible' : 'hidden' }}
        onClick={() => {setImage(imageInd - 1)}}
      ><FaAngleLeft /></Arrow>

      <Img
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
        className={zoomed ? 'ZoomArrow' : expanded ? 'rightArrowExp' : 'rightArrow'}
        style={{visibility: imageInd < urlArr.length - 1 ? 'visible' : 'hidden' }}
        onClick={() => {setImage(imageInd + 1)}}
        ><FaAngleRight /></Arrow>
    </div>

  </div>)
}


export default ImageCarousel;