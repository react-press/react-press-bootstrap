import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from '../../main/Pagination';
import { Row, Container, Col } from 'react-bootstrap';
import Hero from '../../main/Hero';


const PostArchive = ({ posts, isLoaded}) => {

  const [categories, setCategories] = useState(false);
  const [archiveTitle, setArchiveTitle] = useState('Blog');
  const [slug] = useState(`/`);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

console.log(posts);
    
  if(isLoaded) {
    return (
      <React.Fragment>
        <Container className="archive">
          <Hero
          pageTitle={archiveTitle}
          />
          <Posts posts={currentPosts} loading={isLoaded} />
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
          </Container>
      </React.Fragment>
    ) 
  } return <h3>Loading...</h3>
}

export default PostArchive;