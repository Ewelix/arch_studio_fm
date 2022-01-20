import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;700&display=swap');
  
  html {
    box-sizing: border-box;
  }
  //dobra praktyka, zeby wszytskie elementy dziedziczyly od htmla box-sizing
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Spartan', sans-serif;
  }
  
  a,
  button {
    font-family: 'Spartan', sans-serif;
  }
`;