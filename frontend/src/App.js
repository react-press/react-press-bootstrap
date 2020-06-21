import React from "react";
import Navigation from './components/Navigation'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/layouts/Home';
import Page from './components/layouts/Page';


export default function yohReact() {
  return (
    <React.Fragment>
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/page" component={Page}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}