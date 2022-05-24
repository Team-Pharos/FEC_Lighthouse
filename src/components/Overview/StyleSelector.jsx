import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyleImg = styled.img`
    width: 60px;
    height: 50px;
    border-radius: 50px;
`;

const StyleSelector = ({styles, currentStyle, setCurrentStyle}) => {
  // console.log(styles);
  // console.log(currentStyle);
  return (
  <div className='StyleSelector'>
  {
    currentStyle !== undefined
    ? <p>{`STYLE > ${currentStyle.name}`}</p>
    : <></>
  }

  {styles.map((style, i) => {
    return <span key={style.style_id} >
      {i % 4 === 0 && i !== 0
      ? <br/>
      : ' '}
      <StyleImg src={style.photos[0].thumbnail_url} name={i} onClick={e => {console.log(e.target.name); setCurrentStyle(styles[e.target.name])}}/>
    </span>
  })}
  </div>

  )
}

export default StyleSelector;