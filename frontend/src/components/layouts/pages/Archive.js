import React from 'react';
import axios from 'axios';
import { Row, Container } from 'react-bootstrap';
import Posts from '../../modules/archives/Posts';
import Sidebar from '../../modules/archives/Sidebar';

class Archive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            imgUrl: '',
            author: '',
            isLoaded: false 
        }
    }
  getPosts = () => {
    const token = process.env.ACCESS
    
    axios.get('https://admin.react-press.net/wp-json/wp/v2/posts', {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    .then(res => this.setState({
      posts: res.data
    }))
    .then(() => {
        this.getDetails();
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
        console.log(featured_media, author);
        Promise.all([getImageUrl, getAuthor]).then(resp => {
        // console.log(resp.data);
        
        this.setState({
            imgUrl: resp[0].data.source_url,
            author: resp[1].data.name,
            isLoaded: true
        });
    })

    });
  }

  componentDidMount() {
    this.getPosts();

  }
    render(){
        // console.log(this.state.posts)
        const {posts, isLoaded, imgUrl, author } = this.state;
        return(
            <Container>
                <Row className="archive">
                    <Sidebar/>
                    <Posts 
                        posts={posts} 
                        isLoaded={isLoaded}
                        imgUrl={imgUrl}
                        author={author}
                        />
                </Row>
            </Container>
        )
    }
}
  
  export default Archive;  
