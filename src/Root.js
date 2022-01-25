import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/AboutTab/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { GlobalStyle } from './assets/styles/globalStyle';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        <Switch>
          {/*<div>hi</div>*/}
          {/*<Route exact path="/" component={Home} />*/}
          {/*<Route exact path="/" component={About} />*/}
          <Route exact path="/" component={Portfolio} />
          {/*<Route exact path="/contact" component={Contact} />*/}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
