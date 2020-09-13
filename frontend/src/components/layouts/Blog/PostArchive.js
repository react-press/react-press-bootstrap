import React, { useEffect, useContext } from 'react';
import { ReactPressContext} from '../../../ReactPressProvider';
import { Container } from 'react-bootstrap';
import Hero from '../../main/Hero';


const PostArchive = () => {
  // const categories = useContext(UserContext);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(3);


  // Get current posts
  
  // if(loading) {
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  // }


// Change page
// const paginate = pageNumber => setCurrentPage(pageNumber);

// console.log(categories)

useEffect(() => {
  // console.log(posts);
})

// console.log(post.posts)
    
  // if(loading) {
    
    return (
      <React.Fragment>
        <Container className="archive">
          <Hero
          // pageTitle={categories.name}
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