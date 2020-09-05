import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav, Card, Button, Pagination } from 'react-bootstrap';


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

useEffect(() => {
  if (categories) {
      //GET posts in category that match the slug
      axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)
      //&per_page=5&offset=2

      .then(res =>{
        console.log(res);
        res.data.map(post => {

          const featured_media = post.featured_media;
          const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${featured_media}`)

            .then((image) => {
              setPosts(res.data);
              setFeaturedImage(image.data.source_url)
              setIsLoaded(true);
              
            })
        })

      })
    }
}, [categories]);

// let active = 2;
// let item = [];

// for (let number = 1; number <= 5; number++) {
//   item.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// const paginationBasic = (
//   <div>
//     <Pagination>{item}</Pagination>
//     <br />
//   </div>
// );
    
  if(isLoaded) {
    return (
      <React.Fragment>
        <Container>
        <h1>{archiveTitle}</h1>
        <Row>
          
          
          { posts.map(post => (
                  
            <Col lg={4} key={post.id} className="cared-sidebar">
                <Card className="w-100">
                <Link to={`/${post.slug}`}><Card.Img variant="top" src={featuredImage}/></Link>
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
          {/* {paginationBasic} */}          
         </Row>
         </Container>
      </React.Fragment>
    ) 
  } return <h3>Loading...</h3>
}

export default Blog;