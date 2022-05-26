import { createGlobalStyle } from 'styled-components';
import WaterBrush from './WaterBrush-Regular.ttf';

const FontStyles = createGlobalStyle`
   @font-face {
     font-family: 'Water Brush';
     src: url(${WaterBrush}) format('truetype');
   };

`;

export default FontStyles;