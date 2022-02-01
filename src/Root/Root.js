import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/AboutTab/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import Nav from '../components/Nav/Nav';
import '../App.css';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';


const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
