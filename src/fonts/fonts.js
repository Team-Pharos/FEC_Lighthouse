import { createGlobalStyle } from 'styled-components';
import Akshar-VariableFont_wght from './Akshar-VariableFont_wght.ttf';

const FontStyles = createGlobalStyle`
   @font-face {
     font-family: 'Akshar';
     src: url(${Akshar-VariableFont_wght}) format('truetype');
   }

`;

export default FontStyles;