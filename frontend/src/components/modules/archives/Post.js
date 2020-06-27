import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';


class Post extends Component {
    
    constructor(props){
        super(props);
        
      }

    render(){
        const { post, isLoaded, imgUrl, author, title } = this.props;

        return(
            <Col sm={6} md={10} className="card-sidebar">
            <Card className="w-100">
            <Card.Img variant="top" src={ imgUrl } />
            <Card.Body>
                <Card.Title>{post.title.rendered}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}>
                </Card.Text>
                    <h6>{ 'Posted by ' + author }</h6>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
        )
    }
}

export default Post;