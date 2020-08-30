import React from 'react';
import { BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Blog from '../layouts/Blog';
import Categories from '../layouts/Blog/Categories'

class MainNav extends React.Component {

  constructor(props) {
    super(props);

    this.props = {
      catID: '1'}
  }

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
                    <Nav.Link href="/theme">Theme</Nav.Link>
                    <Nav.Link href="/archive">Blog</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
            <Router>
              <Switch>
                <Route exact path="/" component={Blog}/>

                  <Route exact path="/archive/">
                    <Redirect to="/archive/all-posts"/>
                  </Route>

          </Switch>
        </Router>
            </React.Fragment>
          )
       }
}

export default MainNav;
