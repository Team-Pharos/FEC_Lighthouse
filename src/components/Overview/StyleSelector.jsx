import React, {useEffect, useState} from 'react';
import {StyleImg} from './OverviewStyledCom.jsx';

const StyleSelector = ({styles, currentStyle, setCurrentStyle}) => {
  return (
  <div className='StyleSelector'>
  {
    currentStyle !== undefined
    ? <h4>{`STYLE > ${currentStyle.name}`}</h4>
    : <></>
  }

  {styles.map((style, i) => {
    return <span key={style.style_id} >
      {i % 4 === 0 && i !== 0
      ? <br/>
      : ' '}
      <StyleImg style={{borderStyle: style === currentStyle ? 'solid' : ''}} src={style.photos[0].thumbnail_url} name={i} onClick={e => {setCurrentStyle(styles[e.target.name])}}/>
    </span>
  })}
  </div>

  )
}

export default StyleSelector;