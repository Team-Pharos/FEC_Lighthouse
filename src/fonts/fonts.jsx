import { createGlobalStyle } from 'styled-components';
import Akshar-VariableFont_wght from './Akshar-VariableFont_wght.ttf';

const FontStyles = createGlobalStyle`
   @font-face {
     font-family: 'Akshar';
     src: local('Font Name'), local('FontName'),
        url(${Akshar - VariableFont_wght}) format('truetype'),
        font-weight: 300;
        font-style: normal;
   }
`;

export default FontStyles;