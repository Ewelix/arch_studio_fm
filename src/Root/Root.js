import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import About from '../views/About/About';
import Contact from '../views/Contact/Contact';
import Home from '../views/Home/Home';
import Portfolio from '../views/Portfolio/Portfolio';

const Root = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
