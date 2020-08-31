import React, { useEffect} from 'react';
import axios from 'axios';


const Post = (props) => {

    const [post, setPost] = React.useState([]);
    const [isMounted, setIsMounted] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [slug] = React.useState(`${props.location.pathname}`);
    const [postID, setPostID] = React.useState([]);
    const [date, setDate] = React.useState([]);
    const [title, setTitle] = React.useState([]);
    const [featuredMedia, setImgID] = React.useState([]);
    const [source_url, setSourceUrl] = React.useState([]);
    const [content, setContent] = React.useState([]);

    //inital request to GET posts
    useEffect(() => {
        const getPosts = () => {
    
            axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts/`)
        
            .then((resp) => {
      
                resp.data.map(post => {
        
                  let idx = post.slug;
        
                  if(slug === '/' + idx){
                    setPost(post);
                    setPostID(post.id);
                    setContent(post.content);
                    setImgID(post.featured_media)
                    console.log(post.featured_media);
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
          getPosts();
        }, [])

  //set the endpoints needed for single post in state
  useEffect(() => {
      if (isMounted) {    

        const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featuredMedia}`)
        
        // Promise.all([getImageUrl])
        
          .then((featured_image) => {
            setSourceUrl(featured_image.data.source_url);
            setDate(post.date);
            setTitle(post.title.rendered);
            setIsLoaded(true);
            console.log(post)
          })
      }

}, [isMounted])

if(isLoaded){
    return (
    <React.Fragment>
        
        <h1>{title}</h1>
        <span>{date}</span>
        <img src={source_url} />
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>

    </React.Fragment>    
    )
    } return <h3>Loading ...</h3>
}


export default Post;