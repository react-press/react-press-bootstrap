import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav, Card, Button } from 'react-bootstrap';


const Blog = (props) => {

  const [categories, setCategories] = React.useState(false);
  const [archiveTitle, setArchiveTitle] = React.useState('Blog');
  const [posts, setPosts] = React.useState([]);
  const [featuredImage, setFeaturedImage] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [slug, setSlug] = React.useState(`${props.location.pathname}`)
  const [catID, setCat] = React.useState(1)

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

//get posts if first function fires successfully
useEffect(() => {
  if (categories) {
  
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)

      .then(res =>{

        res.data.map(post => {
          const featured_media = post.featured_media;

          const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featured_media}`)

            .then((image) => {
              // console.log(image.data.source_url)
              setPosts(res.data);
              setFeaturedImage(image.data.source_url)
              setIsLoaded(true);
            })
        })

      })
    }
}, [categories]);
    
  if(isLoaded) {
    return (
      <React.Fragment>
        <h1>{archiveTitle}</h1>
        <Row>
          
          { posts.map(post => (
                  
            <Col lg={4} key={post.id} className="cared-sidebar">
                <Card className="w-100">
                  <Card.Img variant="top" src={featuredImage}/>
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
         </Row>
      </React.Fragment>
    ) 
  } return <h3>Loading...</h3>
}

export default Blog;