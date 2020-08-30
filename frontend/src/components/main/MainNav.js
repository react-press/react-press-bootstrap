import React from 'react';
import { BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Blog from '../layouts/Blog/Blog';
import Post from '../layouts/Blog/Post';

class MainNav extends React.Component {

    render(){
      return (
            <React.Fragment>
            <Navbar className="rp-nav" expand="lg" variant="light" bg="light">
              <Container>
              <Navbar.Brand href="/">react-press</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
            <Router>
              <Switch>
                <Route exact path="/" component={Blog}/>
                <Route exact path="/blog" component={Blog}/>
                
                <Route exact path="/all-posts/:slug" component={Blog}/>
                <Route exact path="/category/:slug" component={Blog}/>
                <Route exact path="/:slug/" component={Post}/>
                
          </Switch>
        </Router>
            </React.Fragment>
          )
       }
}

export default MainNav;
