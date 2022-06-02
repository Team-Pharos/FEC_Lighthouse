import React from 'react';
import styled from 'styled-components';

const OuterScale = styled.div`
display: inline-block;
width: 100%;
height: 10px;
border-top: 1px solid black;
border-bottom: 1px solid #8A92B0;
position: relative;
background-color: #010A2650;
`;
const InnerScale = styled.div`
position: absolute;
top: 0;
left: 0;
border-top: 1px solid #ABF8EC;
white-space: nowrap;
overflow: hidden;
height: 10px;
width: ${({percent}) => {
  return percent;
}}%;
background-color: #6BA69B;
`;

const CharacteristicsScale = ({value}) => {

  let calculatePercentage = () => {
    return Math.round((value / 5) * 100)
  }

  return (
    <OuterScale>
      <InnerScale percent={calculatePercentage()}/>
    </OuterScale>
  )
};

export default CharacteristicsScale;