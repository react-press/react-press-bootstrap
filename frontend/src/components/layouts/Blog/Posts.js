
import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import { Row, Container, Col, Nav, Card, Button, Pagination } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
    

  if (!loading) {
    return <h2>Loading...</h2>;
  }
  

  return (
      <React.Fragment>
            {posts.map(post => (

                <Col key ={post.id} lg={4} className="cared-sidebar">
                    <PostItem
                    post={post}
                    />
            </Col>
            ))}
        </React.Fragment>
  );
};

export default Posts;