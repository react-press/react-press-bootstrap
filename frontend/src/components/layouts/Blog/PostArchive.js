import React, { useEffect, useContext } from 'react';
import { UserContext} from '../../main/WordpressProvider';
import { Container } from 'react-bootstrap';
import Hero from '../../main/Hero';


const PostArchive = () => {
  const post = useContext(UserContext);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(3);


  // Get current posts
  
  // if(loading) {
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  // }


// Change page
// const paginate = pageNumber => setCurrentPage(pageNumber);

useEffect(() => {
  // console.log(posts);
})

console.log(post.posts)
    
  // if(loading) {
    
    return (
      <React.Fragment>
        <Container className="archive">
          <Hero
          pageTitle={post.archiveTitle}
          />
          {/* <Posts posts={posts} loading={loading} /> */}
        {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          /> */}
          </Container>
      </React.Fragment>
    ) 
  // } 
  // return <h3>Loading...</h3>
}

export default PostArchive;