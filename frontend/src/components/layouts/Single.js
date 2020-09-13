import React, { useEffect, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactPressContext } from '../../ReactPressProvider';
import NoMatch from './NoMatch';
import axios from 'axios';
import { Row, Container, Col } from 'react-bootstrap';
import Page from '../layouts/Page/Page';
import Post from '../layouts/Blog/Post';

const Single = (props) => {
  const [success, setSuccess] = useState(false);
  const context = useContext(ReactPressContext);
  const categories = context.categories;
  const posts = context.posts;
  const [post, setPost] = useState({});
  const pages = context.pages;
  const [page, setPage] = useState({});
  const [postType, setPostType] = useState('');
  const [featuredMedia, setFeaturedMedia] = useState([]);
  const [source_url, setSourceUrl] = useState([]);
  let slug = props.location.pathname;


  useEffect(() => {

    
    
    const pageMap = () => {
      pages.map((page) => {
        
        let idx = page.slug

        if(slug === '/' + idx){
          setPostType(page.type);
          setPage(page);
          setSuccess(true);
          setFeaturedMedia(page.featured_media);
        }

      })
    }

    const postMap = () => {
      posts.map((post) => {
        
        let idx = post.slug

        if(slug === '/' + idx){
          setPostType(post.type);
          setPost(post);
          setSuccess(true);
          setFeaturedMedia(post.featured_media);
        } 

      });
    }
  pageMap();
  postMap();
  }, [])

 
    useEffect(()=> {
      if(success){

      axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featuredMedia}`)
          
      .then((featured_image) => {
        setSourceUrl(featured_image.data.source_url);
      }) 

    }

    }, [])
  


 
  if(postType === 'page'){
    return (
    <React.Fragment>
      <Page
      page={page}
      />
    </React.Fragment>  
    )
  } else if(postType === 'post'){
    return (
    <React.Fragment>
    <Post
    post={post}
    />
  </React.Fragment>  )
  }return <h3>Loading...</h3>
    
}

export default Single;