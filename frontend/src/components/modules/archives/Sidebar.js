import React from 'react';
import { Container, Col, Nav} from 'react-bootstrap';

class Sidebar extends React.Component {
  render() { 
      return (
          <React.Fragment>
            <Col md={6} lg={2}>
                <Container className="sidebar">
                    <h2>Blog-Categories</h2>
                        <Nav defaultActiveKey="/home" className="sidebar-nav flex-md-column pb-3 pb-sm-0">
                            <Nav.Link href="/home">All Posts</Nav.Link>
                            <Nav.Link eventKey="link-1">Category</Nav.Link>
                            <Nav.Link eventKey="link-2">Category</Nav.Link>
                        </Nav>
                </Container>
            </Col>
          </React.Fragment>
        );
    }
}

export default Sidebar;
