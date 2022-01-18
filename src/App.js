import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "components/Home/Home";
import About from "components/About/About";
import Portfolio from "components/Portfolio/Portfolio";
import Contact from "components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
