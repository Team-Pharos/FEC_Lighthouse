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