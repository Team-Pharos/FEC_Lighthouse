import React from 'react';
import styled from 'styled-components';

export const StyleImg = styled.img`
    width: 60px;
    height: 50px;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  font-size: 32px;
  border: white;
  position: absolute;
  right: 5%;
  z-index:10;
  &:hover {
      cursor: pointer;
  }
`;

export const Img = styled.img`
    width: ${props => props.className ? '750px' : '400px'};
    height: ${props => props.className ? '950px' : '500px'};
    max-width: ${props => props.className !== 'ZoomImg' && '100%'};
    border-radius: 10%;
    object-fit: cover;
    &:hover {
      cursor: ${props => props.className === 'ZoomImg' ? 'zoom-out' : props.className === 'ExpImg' ? 'crosshair' : 'zoom-in'};
    }
    transform: ${props => props.className === 'ZoomImg' ? 'scale(2.5)' : ''};
    @media (min-width: 1921px) {
      width: ${props => props.className ? '1050px' : '400px'};
      height: ${props => props.className ? '1300px' : '500px'};
    }
`;

export const ImgMini = styled.img`
  width: ${props => props.className ? '100px' : '40px'};
  height: ${props => props.className ? '100px' : '40px'};
  border-radius: 50%;
  filter: drop-shadow(0 0 0.75rem white);
  &:hover {
      cursor: pointer;
  }
  display: ${props => props.className === 'ZoomImgMini' ? 'none' : ''};
`;

export const Arrow = styled.button`
background-color: transparent;
  color: #ab4a27;
  height: 40px;
  width: 40px;
  border: none;
  font-size: 32px;
  &:hover {
    color: #68a69b;
    cursor: pointer;
  }
  display: ${props => props.className === 'ZoomArrow' ? 'none' : ''};
`;

export const AddToCartButton = styled.button`
  background-color: #68a69b;
  color: #010A26;
  font-weight: 400;
  border: 2px solid #010A26;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  padding: 1px 32px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
