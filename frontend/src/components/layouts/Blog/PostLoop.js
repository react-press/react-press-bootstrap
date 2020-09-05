import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Container, Col, Nav, Card, Button, Pagination } from 'react-bootstrap';


const PostLoop = (props) => {



return (
            <Col lg={4} className="cared-sidebar">
            <Card className="w-100">
            <Link to={`/${props.slug}`}><Card.Img variant="top" src={props.featuredImage}/></Link>
                <Card.Body>
                  <Card.Title>{props.title.rendered}</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt.rendered}}>
                  </Card.Text>
                      <h6>{ 'Posted by andrew' }</h6>
                  <Button variant="primary">
                      <Link to={`/${props.slug}`}>Read More</Link>
                  </Button>
                </Card.Body>
            </Card>
         </Col>
)
}

export default PostLoop;