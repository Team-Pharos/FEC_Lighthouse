import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown } from 'react-icons/fa';

const Img = styled.img`
    max-width:70%;
    height:500px;
    border-radius: 10%;
    object-fit: cover;
`;

const ImgMini = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%
`;

const Arrow = styled.button`
  background-color: white;
  border: white;
  font-size: 32px;
`;

const ImageGallery = ({currentStyle}) => {
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
        return (<>
          <ImgMini key={img} className='miniImg' src={img} style={{border: img === miniUrlArr[imageInd] ? 'solid' : '', display: (i > imageInd + 6 || (i < imageInd && i < miniUrlArr.length - 7))? 'none' : ''}}/>
          <br />
        </>)
      })}


      <Arrow className='downArrow' style={{visibility: imageInd < miniUrlArr.length - 1 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd + 1)}}><FaAngleDown /></Arrow>
    </div>



    {/* left and right */}
    <div className='gallery'>
      <Arrow className='leftArrow' style={{visibility: imageInd !== 0 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd - 1)}}><FaAngleLeft /></Arrow>

      <Img src={urlArr[imageInd]} />

      <Arrow className='rightArrow' style={{visibility: imageInd < urlArr.length - 1 ? 'visible' : 'hidden' }} onClick={() => {setImage(imageInd + 1)}}><FaAngleRight /></Arrow>
    </div>

  </div>)
}


export default ImageGallery;