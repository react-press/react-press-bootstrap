import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

class Posts extends React.Component {
  render() { 
      return (
          <React.Fragment>
            <Col md={6} lg={10} className="card-sidebar">
                <Card className="w-100">
                <Card.Img variant="top" src="http://via.placeholder.com/600x375" />
                <Card.Body>
                    <Card.Title>Blog Post Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
          </React.Fragment>
        );
    }
}

export default Posts;
