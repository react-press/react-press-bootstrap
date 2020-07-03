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
            catID: '1',
            categories: '',
            category: '',
            imgUrl: '',
            author: '',
            isLoaded: false 
        }
    }
  getPosts = () => {
    const token = process.env.ACCESS
    
    const getPosts = axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${this.props.location.state.catID}`, {
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
        // this.mapCat();
        // console.log(this.state.categories)
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
            category: resp[1].data.id,
            isLoaded: true
        });
    })

    });
  }

  mapCat = () => {
     

      const category = {...this.state.categories};

      const cat1 = category[0];
      // category[key] = val;

      // if (typeof key === 'string') {
      //   category[key] = val;
      // } else {
      //   key.map((item, index) => {
      //     category[item] = val[index];
      //   });
      // }
      this.setState({catID: category});
      console.log(category)
      console.log(cat1)
      
    }
  

  // handleSetState(cat, key, val) {
  //   const category = {...this.state[cat]};
  //   if (typeof key === 'string') {
  //     category[key] = val;
  //   } else {
  //     key.map((item, index) => {
  //       category[item] = val[index];
  //     });
  //   }
  //   this.setState({[cat]: category});
  // }

  handleClick = () => {
    this.setState({catID: '2' }, 
    () => {this.getPosts({})});
    
  };

  componentDidMount() {
    this.getPosts();
  }

  // componentDidUpdate(prevProps, prevState, screenShot) {

      
    // console.warn(prevState);
    // if (this.state.catID !== this.props.match.params.id) {
    // console.log(this.props.match.params.id);


    // }
      // console.log(this.props.match.params.id)
  // }

  // componentDidUpdate(){
  //   if (this.state.catID === this.props.match.params.id) {
  //     this.getPosts();
  // }

  componentDidUpdate(prevState) {
    // const {cat } = this.state.catID;
    
    if (this.props.location.pathname !== prevState.location.pathname) {

        this.getPosts();
      }
}
  

    render(){
        const {posts, catID, isLoaded, imgUrl, author, categories } = this.state;



      if(isLoaded){
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
                      <Nav defaultActiveKey="/archive" className="sidebar-nav flex-lg-column pb-3 pb-sm-0">

                        {categories.map((category) => (
                          
                            <Link to={{
                              pathname: `/archive/${category.slug}`,
                              state: { catID: category.id }
                            }}  key={category.id} onClick={ this.mapCat }>{category.name} </Link>

                      ))}

                          {/* <Link to={`/archive/${category}`} onClick={this.handleClick}>All Posts</Link> */}

                      </Nav>
                </Container>
                </Col> 
                </Row>
            </Container>
        )
      }
      return <h3>Loading...</h3>
    }
}
  
  export default Archive;  
