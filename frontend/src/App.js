import React from "react";
import Navigation from './components/modules/Navigation'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/layouts/Home';
import Theme from './components/layouts/Theme';
import Archive from './components/layouts/pages/Archive';
import Contact from './components/layouts/Contact';
import Footer from './components/modules/Footer';


class App extends React.Component {
  state = { 
    users: []

  }

  componentDidMount() {
    fetch('express/users', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(users => this.setState({ users }));

      // fetch('/express/wpaccess')
      // .then(res => res.json())
      // .then(data => {
      //   const wpurl = data.wpUrl;
      //   const wpaccess = data.wpAccessToken;

      //   return fetch( wpurl + '/wp/v2/posts', {
      //     method: 'GET',
      //     headers: {
      //       'Authorization': 'Bearer ' + wpaccess
      //     }
      //   })
      //   .then(res => res.json()
      //   .then(posts => console.log(posts))
      //   )

      // });
      
  }

  render() { 
      return (
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
          <p>Created By...</p>
          {this.state.users.map(user => 
              <span key={user.id}>{user.username} </span>
            )}
            </div>
            {/* <div>
              {this.state.posts.map(post => 
              <h2 key={post.id}>{post.title}</h2>
              )}
            </div> */}
        <Footer/>
      </React.Fragment>
        );
    }
}

export default App;



