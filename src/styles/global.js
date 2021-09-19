// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  `;
