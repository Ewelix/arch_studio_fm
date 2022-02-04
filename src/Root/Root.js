import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/AboutTab/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import '../App.css';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import MainTemplate from '../components/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <Router>
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
