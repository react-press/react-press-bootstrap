import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ReactPressContext} from '../../../ReactPressProvider';
import { Container } from 'react-bootstrap';
import Hero from '../../main/Hero';
import Posts from './Posts';
import Pagination from '../../main/Pagination';


const PostArchive = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [success, setSuccess] = useState(false);
  const context = useContext(ReactPressContext);
  const [catID, setCatID] = useState(1);
  const [catTitle, setCatTitle] = useState([]);
  const [posts, setPosts] = useState([]);

  let slug = props.location.pathname;
  const categories = context.categories;

  useEffect(() => {
  
  const catMap = () => {
    categories.map((category) => {
      
      let idx = category.slug
      console.log(category)

      if(slug === '/category/' + idx){
        setCatID(category.id);
        setCatTitle(category.name);
        setSuccess(true);
      }

    })
  }
  catMap();
}, [success])

useEffect(()=> {
  if(success){

    axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)

    .then(res =>{ 
      setPosts(res.data);
      setIsLoaded(true);
    })

}

}, [success])

const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(3);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);
    
  if(isLoaded) {
    
    return (
      <React.Fragment>
        <Container className="archive">
          <Hero
            title={catTitle}
          />
          <Posts posts={currentPosts} isLoaded={isLoaded} />
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
          </Container>
      </React.Fragment>
    ) 
  } 
  return <h3>Loading...</h3>
}

export default PostArchive;