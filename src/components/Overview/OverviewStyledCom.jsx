import React from 'react';
import styled from 'styled-components';

export const Img = styled.img`
    max-width:70%;
    height:500px;
    border-radius: 10%;
    object-fit: cover;
    &:hover {
      cursor: zoom-in;
    }
`;

export const ImgMini = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%
`;

export const Arrow = styled.button`
  background-color: white;
  border: white;
  font-size: 32px;
`;

export const StyleImg = styled.img`
    width: 60px;
    height: 50px;
    border-radius: 50%;
`;