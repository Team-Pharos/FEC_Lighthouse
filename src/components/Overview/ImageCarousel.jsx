import React, {useEffect, useState} from 'react';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaExpand } from 'react-icons/fa';
import ImageModal from './ImageModal.jsx';
import styled from 'styled-components';

const Img = styled.img`
    width: ${props => props.className ? '1000px' : '400px'};
    height: ${props => props.className ? '1200px' : '500px'};
    border-radius: 10%;
    object-fit: cover;
    &:hover {
      cursor: zoom-in;
    }

`;

const ImgMini = styled.img`
  width: ${props => props.className ? '100px' : '40px'};
  height: ${props => props.className ? '100px' : '40px'};
  border-radius: 50%;
  &:hover {
      cursor: pointer;
  }
`;

const Arrow = styled.button`
  background-color: darkgray;
  opacity: 0.5;
  border: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 32px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const ImageCarousel = ({currentStyle, setExpanded, expanded}) => {

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
          <ImgMini className={expanded ? 'show' : ''} src={img} style={{border: img === miniUrlArr[imageInd] ? 'solid' : '', display: (i > imageInd + 6 || (i < imageInd && i < miniUrlArr.length - 7))? 'none' : '' }} onClick={() => {setImage(i)}}/>
          <br />
        </div>)
      })}

      <Arrow className='downArrow' style={{visibility: imageInd < miniUrlArr.length - 1 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd + 1)}}><FaAngleDown /></Arrow>
    </div>

    {/* left and right */}
    <div className='gallery'>
      <Arrow className={expanded ? 'leftArrowExp' : 'leftArrow'} style={{visibility: imageInd !== 0 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd - 1)}}><FaAngleLeft /></Arrow>

      <Img className={expanded ? 'ExpImg' : ''} src={urlArr[imageInd]} onClick={() => {setExpanded(true)}}/>
      <Arrow className={expanded ? 'rightArrowExp' : 'rightArrow'} style={{visibility: imageInd < urlArr.length - 1 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd + 1)}}><FaAngleRight /></Arrow>
    </div>

  </div>)
}


export default ImageCarousel;