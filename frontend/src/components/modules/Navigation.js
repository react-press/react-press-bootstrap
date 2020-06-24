import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';


const Navigation = () => (
            <Navbar className="rp-nav" expand="lg" variant="light" bg="light">
              <Container>
              <Navbar.Brand href="/">react-press</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/theme">Theme</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        );

export default Navigation;
