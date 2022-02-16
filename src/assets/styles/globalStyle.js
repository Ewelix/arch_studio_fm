import { createGlobalStyle } from 'styled-components';
import './font.scss';

export const GlobalStyle = createGlobalStyle`
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
  
  a {
    text-decoration: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }
  
  p {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 25px;
  }
`;
