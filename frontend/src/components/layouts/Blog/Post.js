import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';


const Post = (props) => {

    const [post, setPost] = React.useState([]);
    const [isMounted, setIsMounted] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [slug, setSlug] = React.useState(`${props.location.pathname}`)
    const [postID, setPostID] = React.useState([])
    const [date, setDate] = React.useState([])
    const [title, setTitle] = React.useState([])

    useEffect(() => {
        const getPosts = () => {
    
            axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts/`)
        
            .then((resp) => {
      
                resp.data.map(post => {
        
                  let idx = post.slug;
        
                  if(slug == '/' + idx){
                    setPost(post)
                    setPostID(post.id)
                    console.log(post.id)
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

        setDate(post.date);
        setTitle(post.title.rendered);
        setIsLoaded(true);
        console.log(post)
    }

})

if(isLoaded){
    return (
    <React.Fragment>
        
        <h1>{title}</h1>
        <span>{date}</span>
    </React.Fragment>    
    )
    } return <h3>Loading ...</h3>
}


export default Post;