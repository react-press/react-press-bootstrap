import React, { useEffect, useState} from 'react';
import axios from 'axios';
// import { Row, Container, Col, Nav, Card, Button } from 'react-bootstrap';


const Blog = (props) => {

  const [posts, setPosts] = React.useState([]);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [slug, setSlug] = React.useState(`${props.location.pathname}`)
  const [catID, setCat] = React.useState(1)

  useEffect(() =>{

    const getCategories = () => {
    
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/categories/`)
  
      .then((resp) => {

          resp.data.map(category => {
  
            let idx = category.slug;
  
            if(slug == '/category/' + idx){
              setCat(category.id)
              console.log(category.id)
            }
          })
        }
      )
      .then(()=> {
        setIsMounted(true)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  getCategories();
}, [])

//get posts if first function fires successfully
useEffect(() => {
  if (isMounted) {
  
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)

      .then(res =>{

        console.log(res.data);
        console.log(catID)
        setPosts(res.data);
        setIsLoaded(true);

      })
    }
}, [isMounted]);


    
  if(isLoaded) {
    return (
      <React.Fragment>
        <h1>Blog </h1>
        <div>
          { posts.map(post => (
                  
            <div key={post.id}>
                
               {post.slug}
                
             </div>

                )) }
         </div>
      </React.Fragment>
    ) 
  } return <h3>Loading...</h3>
}

export default Blog;