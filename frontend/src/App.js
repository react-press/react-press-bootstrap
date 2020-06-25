import React from "react";
import Navigation from './components/modules/Navigation'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/layouts/Home';
import Theme from './components/layouts/Theme';
import Contact from './components/layouts/Contact';
import Footer from './components/modules/Footer';


class App extends React.Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/express/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() { 
      return (
        <React.Fragment>
        <Navigation/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/theme" component={Theme}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Router>
        <div className="text-center pb-3">
          <p>Created By...</p>
          {this.state.users.map(user => 
              <span key={user.id}>{user.username} </span>
            )}
            </div>
        <Footer/>
      </React.Fragment>
        );
    }
}

export default App;



