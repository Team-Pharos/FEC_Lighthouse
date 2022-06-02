import React, {useEffect, useState} from 'react';
import {StyleImg} from './OverviewStyledCom.jsx';
import {FaCheckCircle} from 'react-icons/fa';

const StyleSelector = ({styles, currentStyle, setCurrentStyle}) => {
  return (
    <div className='StyleSelector'>
    {
      currentStyle !== undefined
      ? <h4>{`STYLE > ${currentStyle.name}`}</h4>
      : <></>
    }

    {styles.map((style, i) => {
      return (
      <span key={style.style_id} >
        {i % 4 === 0 && i !== 0 ? <br/> : ' '}
        <span className='styleSelectorImg'>
          <StyleImg
            alt='image for different styles'
            src={style.photos[0].thumbnail_url}
            name={i}
            onClick={e => {setCurrentStyle(styles[e.target.name])}}
            style={{opacity: style === currentStyle ? '0.5' : '1'}}
          />
          <FaCheckCircle
            style={{display: style === currentStyle ? '' : 'none'}}
            className='checkMark'
          />
        </span>
      </span>
      )
    })}
    </div>
  )
}

export default StyleSelector;