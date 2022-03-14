import { createGlobalStyle } from 'styled-components';
import './font.scss';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
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

  .fade-enter {
    opacity: 0;
    z-index: 1;

    &.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in-out;
    }
  }
`;
