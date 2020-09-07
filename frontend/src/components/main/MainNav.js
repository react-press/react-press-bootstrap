import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import WordpressProvider from './WordpressProvider';
import PostArchive from '../layouts/Blog/PostArchive';
import Post from '../layouts/Blog/Post';
import Page from '../layouts/Page';
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
                <WordpressProvider>
                <Route exact path="/" component={PostArchive}/>
                <Route exact path="/blog" component={PostArchive}/>
                <Route exact path="/category/:slug" component={PostArchive}/>
                </WordpressProvider>
                <Route exact path="/posts/:slug/" component={Post}/>
                <Route exact path="/:slug/" component={Page}/>
                <Route exact path="/404" component={NoMatch} />
          </Switch>
        </Router>
            </React.Fragment>
          )
}

export default MainNav;
