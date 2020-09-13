import React, { useEffect, useContext, useState } from 'react';
import { ReactPressContext } from '../../ReactPressProvider';
// import NoMatch from './NoMatch';
import axios from 'axios';
import Page from '../layouts/Page/Page';
import Post from '../layouts/Blog/Post';

const Single = (props) => {
  const [success, setSuccess] = useState(false);
  const context = useContext(ReactPressContext);
  const posts = context.posts;
  const [post, setPost] = useState({});
  const pages = context.pages;
  const [page, setPage] = useState({});
  const customPosts = context.customPosts;
  const [customPost, setCustomPost] = useState({});
  const [postType, setPostType] = useState('');
  const [featuredMedia, setFeaturedMedia] = useState([]);
  const [source_url, setSourceUrl] = useState([]);

  let slug = props.location.pathname;


  useEffect(() => {

    
    window.scrollTo(0,0);

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

    const customMap = () => {
      customPosts.map((customPost) => {
        
        let idx = customPost.slug

        if(slug === '/' + idx){
          setPostType(customPost.type);
          setCustomPost(customPost);
          setSuccess(true);
          setFeaturedMedia(customPost.featured_media);
        } 

      });
    }
  pageMap();
  postMap();
  customMap();
  }, [])

 
    useEffect(()=> {
      if(success){

      axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featuredMedia}`)
          
      .then((res) => {
        setSourceUrl(res.data.source_url);
        console.log(res);
      }) 

    }

    }, [success])
  


 
  if(postType === 'page'){
    return (
    <React.Fragment>
      <Page
      page={page}
      source_url={source_url}
      />
    </React.Fragment>  
    )
  } else if(postType === 'post'){
    return (
    <React.Fragment>
    <Post
    post={post}
    source_url={source_url}
    />
  </React.Fragment>  )
  } else if(postType === 'custom-post'){
    return (
    <React.Fragment>
    <Post
    post={customPost}
    source_url={source_url}
    />
  </React.Fragment>  )
  } return <h3>Loading...</h3>
    
}

export default Single;