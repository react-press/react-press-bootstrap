import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import Posts from '../modules/archive/Posts';

class Archive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            catID: '1, 2',
            categories: '',
            imgUrl: '',
            author: '',
            isLoaded: false 
        }
    }
  getPosts = () => {
    const token = process.env.ACCESS
    
    const getPosts = axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${this.state.catID}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    const getCat = axios.get('https://admin.react-press.net/wp-json/wp/v2/categories');

    Promise.all([getPosts, getCat]).then(res => {
      this.setState({
        posts: res[0].data,
        categories: res[1].data
    });
})
    .then(() => {
        this.getDetails();
        console.log(this.state.categories)
    })
    .catch(err => {
      console.log('err');
    })
  }

  getDetails = () => {
    const details = this.state.posts.map((d)=> {
        const featured_media = d.featured_media;
        const author = d.author;
        const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${ featured_media }`);
        const getAuthor = axios.get(`https://admin.react-press.net/wp-json/wp/v2/users/${ author }`);

        Promise.all([getImageUrl, getAuthor]).then(resp => {
        
        this.setState({
            imgUrl: resp[0].data.source_url,
            author: resp[1].data.name,
            isLoaded: true
        });
    })

    });
  }

  handleClick = () => {
    this.setState({catID: '2' }, 
    () => {this.getPosts({})});
    
  };

  componentDidMount() {
    this.getPosts();
  }

    render(){
        const {posts, catID, isLoaded, imgUrl, author, categories } = this.state;
        return(
            <Container>
                <Row className="archive">
                    <Posts 
                        posts={posts} 
                        isLoaded={isLoaded}
                        imgUrl={imgUrl}
                        author={author}
                        />
                <Col lg={2}>
                <Container className="sidebar">
                  <h2>Blog-Categories</h2>
                        <Nav defaultActiveKey="/home" className="sidebar-nav flex-lg-column pb-3 pb-sm-0">
                          <Link to={`/archive/${categories}`} onClick={this.handleClick}>All Posts</Link>
                          <Link to={`/archive/category-1`} onClick={this.handleClick}>Category 1</Link>
                          <Link to={`/archive/category-2`} onClick={this.handleClick}>Category 2</Link>
                      </Nav>
                </Container>
                </Col> 
                </Row>
            </Container>
        )
    }
}
  
  export default Archive;  
