import React from "react";
import Navigation from './components/modules/Navigation'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/layouts/Home';
import Page from './components/layouts/Page';
import Contact from './components/layouts/Contact';
import Footer from './components/modules/Footer';


export default function yohReact() {
  return (
    <React.Fragment>
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/page" component={Page}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
      <Footer/>
    </React.Fragment>
  );
}