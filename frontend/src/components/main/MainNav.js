import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { ReactPressProvider } from '../../ReactPressProvider';
import { Container, Navbar, Nav } from 'react-bootstrap';
import PostArchive from '../layouts/Blog/PostArchive';
import Post from '../layouts/Blog/Post';
import Single from '../layouts/Single';
import NoMatch from '../layouts/NoMatch';

const MainNav = () => {

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
                <ReactPressProvider>
                  <Route exact path="/:slug" component={Single}/>                
                </ReactPressProvider>
          </Switch>
        </Router>
            </React.Fragment>
          )
}

export default MainNav;
