import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from '../../main/Pagination';


const PostArchive = (props) => {

  const [categories, setCategories] = useState(false);
  const [archiveTitle, setArchiveTitle] = useState('Blog');
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slug] = useState(`${props.location.pathname}`);
  const [catID, setCat] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    //GETs categories maps the data
    const getCategories = () => {
    
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/categories/`)
  
      .then((res) => {
          res.data.map(category => {
  
            let idx = category.slug;
  
            if(slug === '/category/' + idx){
              setCat(category.id)
              setArchiveTitle(category.name)
            }
          })
        }
      )
      .then(()=> {
        setCategories(true)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  getCategories();
}, [slug])

useEffect(() => {
  if (categories) {
      //GET posts in category that match the slug
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)

      .then(res =>{ 
        setPosts(res.data);
        setIsLoaded(true);
      })
    }
}, [categories, catID]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);
    
  if(isLoaded) {
    return (
      <React.Fragment>
        <div className='container mt-5'>
          <h1 className='text-primary mb-3'>{archiveTitle}</h1>
          <Posts posts={currentPosts} loading={isLoaded} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </React.Fragment>
    ) 
  } return <h3>Loading...</h3>
}

export default PostArchive;