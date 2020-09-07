import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav, Card, Button } from 'react-bootstrap';
import Posts from './Posts';
import Pagination from '../../main/Pagination';


const PostArchive = (props) => {

  const [categories, setCategories] = React.useState(false);
  const [archiveTitle, setArchiveTitle] = React.useState('Blog');
  const [posts, setPosts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [slug, setSlug] = React.useState(`${props.location.pathname}`);
  const [catID, setCat] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);

  useEffect(() => {
    //GETs categories maps the data
    const getCategories = () => {
    
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/categories/`)
  
      .then((res) => {
          res.data.map(category => {
  
            let idx = category.slug;
  
            if(slug == '/category/' + idx){
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
}, [])

useEffect(() => {
  if (categories) {
      //GET posts in category that match the slug
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)
      //&per_page=5&offset=2

      .then(res =>{
        // console.log(res);
        setPosts(res.data);
        setIsLoaded(true);
        // res.data.map(post => {

        //   const featured_media = post.featured_media;
        //   const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featured_media}`)

        //     .then((image) => {
              
        //       // console.log(image);
              
        //       setFeaturedImage([image.data.source_url])
              
              
        //     })
        // })

      })
    }
}, [categories]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(postsPerPage);


// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

// let active = 2;
// let item = [];

// for (let number = 1; number <= 5; number++) {
//   item.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// const paginationBasic = (
//   <div>
//     <Pagination>{item}</Pagination>
//     <br />
//   </div>
// );
    
  if(isLoaded) {
    return (
      <React.Fragment>
        <div className='container mt-5'>
          <h1 className='text-primary mb-3'>My Blog</h1>
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