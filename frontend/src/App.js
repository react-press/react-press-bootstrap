import React from "react";
import Navigation from './components/modules/Navigation'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/layouts/Home';
import Theme from './components/layouts/Theme';
import Archive from './components/layouts/pages/Archive';
import Contact from './components/layouts/Contact';
import Footer from './components/modules/Footer';


const App = () =>  (

      <React.Fragment>
        <Navigation/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/theme" component={Theme}/>
            <Route exact path="/archive" component={Archive}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Router>
        <div className="text-center pb-3">
          <p>Created By Andrew & Von</p>
            </div>
        <Footer/>
      </React.Fragment>
)

export default App;



