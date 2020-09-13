
import React from 'react';
import PostItem from './PostItem';
import { Row, Col } from 'react-bootstrap';

const Posts = ({ posts, isLoaded }) => {
    

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }
  

  return (
      <React.Fragment>
        <Row>
            {posts.map(post => (

                <Col key ={post.id} lg={4}>
                    <PostItem
                    post={post}
                    />
            </Col>
            ))}
          </Row>
        </React.Fragment>
  );
};

export default Posts;