import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Root = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate />
      </ThemeProvider>
    </Router>
  );
};

export default Root;
