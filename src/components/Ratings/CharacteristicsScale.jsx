import React from "react";
import styled from "styled-components";

export const OuterScale = styled.div`
  display: inline-block;
  width: 100%;
  height: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid #8a92b0;
  position: relative;
  background-color: #010a2650;
`;
export const InnerScale = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-top: 1px solid #abf8ec;
  white-space: nowrap;
  overflow: hidden;
  height: 10px;
  width: ${({ percent }) => {
    return percent;
  }}%;
  background-color: #6ba69b;
`;

const Arrow = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  margin-left: ${({ percent }) => {
    return percent;
  }}%;
  left: -10px;
  border-top: 15px solid #6ba69b;
`;

export const Scale = styled.div`
  width: 100%
  height: auto;
`;

const CharacteristicsScale = ({ value }) => {
  let calculatePercentage = () => {
    return Math.round((value / 5) * 100);
  };

  return (
    <Scale>
      <Arrow percent={calculatePercentage()} />
      <OuterScale>
        <InnerScale percent={calculatePercentage()} />
      </OuterScale>
    </Scale>
  );
};

export default CharacteristicsScale;
