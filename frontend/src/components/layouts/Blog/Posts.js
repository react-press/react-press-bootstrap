
import React from 'react';
import PostItem from './PostItem';
import { Col } from 'react-bootstrap';

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