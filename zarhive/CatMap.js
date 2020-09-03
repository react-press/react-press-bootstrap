import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav, Card, Button } from 'react-bootstrap';


const Blog = (props) => {

  const [posts, setPosts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [fakeState, setFakeState] = React.useState([]);
  const [slug, setSlug] = React.useState(`${props.location.pathname}`)
  const [catID, setCat] = React.useState([])


  useEffect(() =>{

    const getPosts = () => {
      
    axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)

    .then(res =>{
      console.log(res.data);
      setPosts(res.data);
      setIsLoaded(true);
      setCategories(res.data[1].categories)
      
    })
    .then(() => {
      getCategories();
    })
    .catch((err) => {
      console.log(err)
    })

  }

  const getCategories = () => {
    
    axios.get(`https://admin.react-press.net/wp-json/wp/v2/categories/`)

    .then((resp) => {
      
      console.log(resp)

      resp.data.map(category => {

        setCat(category.id);
        if(slug == '/all-posts/' + category.slug){
          console.log('yerr')
        }
        console.log(category.slug)

          
      })
    })
  }

getPosts();

}, [])


    
  if(isLoaded) {
    return (
      <React.Fragment>
        <h1>Blog </h1>
        <div>
                { posts.map(post => (
                  
                <div key={post.categories}>
                
                  {post.categories}
                
                </div>

                )) }
              </div>
          
      </React.Fragment>

    ) 
  } return <h3>Loading...</h3>
}

export default Blog;