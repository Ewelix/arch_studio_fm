import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Portfolio from '../views/Portfolio/Portfolio';
import Contact from '../views/Contact/Contact';
import '../App.css';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

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
