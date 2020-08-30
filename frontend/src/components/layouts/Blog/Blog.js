import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav, Card, Button } from 'react-bootstrap';


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
        <div>
          { posts.map(post => (
                  
            <Col lg={10} key={post.id} className="cared-sidebar">
                <Card className="w-100">
                  <Card.Img variant="top" src="http://via.placeholder.com/300x200" />
                    <Card.Body>
                      <Card.Title>{post.title.rendered}</Card.Title>
                      <Card.Text dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}>
                      </Card.Text>
                          <h6>{ 'Posted by andrew' }</h6>
                      <Button variant="primary">
                          <Link to={`/${post.slug}`}>Read More</Link>
                      </Button>
                    </Card.Body>
                </Card>
             </Col>
             )) } 
         </div>
      </React.Fragment>
    ) 
  } return <h3>Loading...</h3>
}

export default Blog;

const PostDetails = () => {

}