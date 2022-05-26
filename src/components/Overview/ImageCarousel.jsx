import React, {useEffect, useState} from 'react';
// import {Img, ImgMini, Arrow} from './OverviewStyledCom.jsx';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaExpand } from 'react-icons/fa';
import ImageModal from './ImageModal.jsx';
import styled from 'styled-components';

const Img = styled.img`
    ${'' /* max-width:70%; */}
    width: 400px;
    height:500px;
    border-radius: 10%;
    object-fit: cover;
    &:hover {
      cursor: zoom-in;
    }
    z-index: -10；
`;

const ImgMini = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%
`;

const Arrow = styled.button`
  background-color: transparent;
  border: white;
  font-size: 32px;
`;

const ImageCarousel = ({currentStyle, setExpended, expended}) => {

  const urlArr = [];
  const miniUrlArr = [];

  for (let obj of currentStyle.photos) {
    urlArr.push(obj.url);
    miniUrlArr.push(obj.thumbnail_url);
  }

  const [imageInd, setImage] = useState(0);

  return (
  <div className='ImageGallery'>
  {/* up and down */}
    <div className='thumbnail'>
      <Arrow className='upArrow' style={{visibility: imageInd !== 0 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd - 1)}}><FaAngleUp /></Arrow>
      <br/>

      {miniUrlArr.map((img, i) => {
        return (<div key={img} >
          <ImgMini className='miniImg' src={img} style={{border: img === miniUrlArr[imageInd] ? 'solid' : '', display: (i > imageInd + 6 || (i < imageInd && i < miniUrlArr.length - 7))? 'none' : '' }} onClick={() => {setImage(i)}}/>
          <br />
        </div>)
      })}

      <Arrow className='downArrow' style={{visibility: imageInd < miniUrlArr.length - 1 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd + 1)}}><FaAngleDown /></Arrow>
    </div>

    {/* left and right */}
    <div className='gallery'>
      <Arrow className='leftArrow' style={{visibility: imageInd !== 0 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd - 1)}}><FaAngleLeft /></Arrow>

      <Img src={urlArr[imageInd]} onClick={() => {setExpended(true)}}/>
      <Arrow className='rightArrow' style={{visibility: imageInd < urlArr.length - 1 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd + 1)}}><FaAngleRight /></Arrow>
    </div>

  </div>)
}


export default ImageCarousel;