import React, { useEffect, useState } from 'react';
import NoMatch from '../NoMatch';
import axios from 'axios';
import { Row, Container } from 'react-bootstrap';
import Hero from '../../main/Hero';
import Posts from '../Blog/Posts';
import Pagination from '../../main/Pagination';


const Post = (props) => {

    const [postType, setPostType] = useState([]);
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ID, setID] = useState([]);
    const [slug] = useState(`${props.location.pathname}`);
    // const [date, setDate] = useState([]);
    const [title, setTitle] = useState([]);
    const [excerpt, setExcerpt] = useState([]);
    const [featuredMedia, setImgID] = useState([]);
    const [source_url, setSourceUrl] = useState([]);
    const [content, setContent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    // const customPost = 'post';

    //inital request to GET posts
    useEffect(() => {
        const getPosts = () => {
    
            axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts/`)
        
            .then((resp) => {

              setPosts(resp.data)
              setIsLoaded(true);
                resp.data.map(post => {
                  
                  let idx = post.slug;
        
                  if(slug === '/posts/' + idx){
                    
                    setPost(post);
                    setID(post.id);
                    setPostType(post.type);
                    setContent(post.content);
                    setPostType(post.type);
                    setImgID(post.featured_media);
                    setIsMounted(true);

                   }
                })
              }
            )
            .catch((err) => {
              console.log(err)
            })
          }
          getPosts();
        }, [slug])

        console.log(posts)
    //set the endpoints needed for single post in state
    useEffect(() => {
        if (isMounted) {    

          axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featuredMedia}`)
          
            .then((featured_image) => {
              setSourceUrl(featured_image.data.source_url);
              // setDate(post.date);
              setTitle(post.title.rendered);
              setExcerpt(post.excerpt.rendered);
              // console.log(post)
            }) 
        }

  }, [isMounted, featuredMedia, post])

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

if(isLoaded && isMounted){
  

    return (
      <React.Fragment>
        <div className={'single-' + postType + ` ${postType}-` + ID }>
          <Container fluid>
            <Hero
              pageTitle={title}
              source_url={source_url}
              excerpt={excerpt}
            />
            </Container>        
            <Container>
            <Row>
              <div className="content-single" dangerouslySetInnerHTML={{__html: content.rendered}}></div>
            </Row>
            {/* <p>{date}</p> */}
            <h2 className="ml-3">Related Posts</h2>
            <Posts
              loading={isLoaded}
              posts={currentPosts}
            />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </Container>  
        </div>
      </React.Fragment>  
    )
    } else if(!isMounted && isLoaded){
      
      return <NoMatch/>

    } else {
      return <h3>Loading ...</h3>
    } 
    
}

export default Post;