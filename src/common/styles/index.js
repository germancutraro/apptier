import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import MontserratLight from '../../../public/fonts/Montserrat-Light.ttf';
import MontserratRegular from '../../../public/fonts/Montserrat-Regular.ttf';
import MontserratMedium from '../../../public/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from '../../../public/fonts/Montserrat-SemiBold.ttf';

const GlobalStyles = createGlobalStyle`
  ${normalize}

 /* ======================= Fonts ======================= */
 @font-face {
      font-family: 'Montserrat Light';
      src: url(${MontserratLight});
  }
  @font-face {
      font-family: 'Montserrat Regular';
      src: url(${MontserratRegular});
  }
  @font-face {
      font-family: 'Montserrat Medium';
      src: url(${MontserratMedium});
  }
  @font-face {
      font-family: 'Montserrat SemiBold';
      src: url(${MontserratSemiBold});
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Montserrat Regular', sans-serif;
    font-size: 14px;
    background-color: #0F1520;
  }
  :root {
    --opacity: 0;
    --color: #121212;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  ul {
    list-style: none;
  }
  fieldset {
    border: none;
  }
  * ,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyles;
