import React, { useEffect, useContext, useState } from 'react';
import { ReactPressContext } from '../../../ReactPressProvider';
import NoMatch from '../../main/404';
import axios from 'axios';
import Page from './Page';
import Post from './Post';

const Single = (props) => {
  const [success, setSuccess] = useState(false);
  const context = useContext(ReactPressContext);
  const posts = context.posts;
  const [post, setPost] = useState({});
  const pages = context.pages;
  const [page, setPage] = useState({});
  const customPosts = context.customPosts;
  const [customPost, setCustomPost] = useState({});
  const [postType, setPostType] = useState('NoMatch');
  const [featuredMedia, setFeaturedMedia] = useState([]);
  const [source_url, setSourceUrl] = useState([]);

  let slug = props.location.pathname;


  useEffect(() => {
    
    window.scrollTo(0,0);

    const pageMap = () => {
      const map = pages.map((page) => {
        
        let idx = page.slug

        if(slug === '/' + idx){
          setPostType(page.type);
          setPage(page);
          setSuccess(true);
          setFeaturedMedia(page.featured_media);
        }
        return page;
      })
      return map;
    } 

    const postMap = () => {
      const map = posts.map((post) => {
        
        let idx = post.slug

        if(slug === '/' + idx){
          setPostType(post.type);
          setPost(post);
          setSuccess(true);
          setFeaturedMedia(post.featured_media);
        } 
        return post;
      });
      return map;
    } 

    const customMap = () => {
      const map = customPosts.map((customPost) => {
        
        let idx = customPost.slug

        if(slug === '/' + idx){
          setPostType(customPost.type);
          setCustomPost(customPost);
          setSuccess(true);
          setFeaturedMedia(customPost.featured_media);
        } 
        return customPost;
      });
      return map;
    }
  pageMap();
  postMap();
  customMap();
  }, [customPosts, pages, posts, slug])

 
    useEffect(()=> {
      if(success){

      axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featuredMedia}`)
          
      .then((res) => {
        setSourceUrl(res.data.source_url);
        console.log(res);
      }) 

    }

    }, [success, featuredMedia])
 
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
  } else if(postType === 'NoMatch'){
    return (
    <React.Fragment>
      <NoMatch/>
  </React.Fragment>  )
  }  
  return <h3>Loading...</h3>
    
}

export default Single;