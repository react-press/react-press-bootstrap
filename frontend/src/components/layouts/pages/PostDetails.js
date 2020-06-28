import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Row, Container, Col, Image } from 'react-bootstrap';
import Sidebar from '../../modules/archives/Sidebar'

class PostDetails extends React.Component {

    state = {
        post: {},
        posts: [],
        postId: '',
        imgId: '',
        imgUrl: '',
        authorId: '',
        isLoaded: false
    }

    componentDidMount() {
        // const token = process.env.ACCESS

        axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts/${this.props.match.params.id}`)

        .then(res => {
            this.setState({
                post: res.data,
                imgId: res.data.featured_media,
                authorId: res.data.author,
                isLoaded: true
            })
        }).then(() =>{
            this.getDetails();
        })
        .catch(err => {
            console.log('err')
        });
    }

    getDetails = () => {
            const id = this.state.imgId
            const postId = this.state.postId
            const authorId = this.state.author
       
            const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${this.state.imgId}`);
            const getAuthor = axios.get(`https://admin.react-press.net/wp-json/wp/v2/users/${ this.state.authorId }`);
            const getPosts = axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts`);
            // console.log(featured_media, author);
            Promise.all([getImageUrl, getAuthor, getPosts]).then(resp => {
            // console.log(resp.data);
            
            this.setState({
                imgUrl: resp[0].data.source_url,
                author: resp[1].data.name,
                posts: resp[2].data

            })
        })
    
    };
      


 
    render(){
        
        const{ post, isLoaded } = this.state;
        // const date = new Date(post.date)
        // const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
        // const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

        // console.log(`${day}-${month}-${year }`)

        if(isLoaded){

        return (
            <Container>
            <Row className="archive">
                {/* <Link to='/'>Go Back</Link> */}
                <Col  lg={10} className="single-post">
                <h1>{post.title.rendered}</h1>
                    <span>posted on: {post.date}</span>
                    <h5>posted by:  {this.state.author}</h5>
                <Image src={this.state.imgUrl} fluid className="pt-3 pb-3 featured-img" />
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
                </Col>
                <Sidebar />
            </Row>
            </Container>
        )
    }
    return <h3>Loading...</h3>
    }
}

export default PostDetails;