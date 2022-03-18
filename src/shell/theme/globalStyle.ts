import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    /* converts 1 rem to 10px instead of 16px */
    font-size: 62.5% !important;
    overflow-x:hidden;
  }

  * {
    box-sizing: border-box;
  }

  body {
    /* brand darkest blue */
    background-color: #0D1328;
    font-family: 'Rubik', sans-serif;
    line-height: 1.1;
  }
  
`;
