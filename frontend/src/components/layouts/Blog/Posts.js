import React, { useState } from "react";
import PostItem from "./PostItem";
import { Row, Col } from "react-bootstrap";
import Pagination from "../../main/Pagination";

const Posts = ({ posts, isLoaded }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const current = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <React.Fragment>
      <Row>
        {current.map((post) => (
          <Col key={post.id} lg={4}>
            <PostItem post={post} />
          </Col>
        ))}
      </Row>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </React.Fragment>
  );
};

export default Posts;
