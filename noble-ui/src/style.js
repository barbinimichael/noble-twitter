import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100vw;
    overflow: hidden;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    font-family: Muli;
  }
`;