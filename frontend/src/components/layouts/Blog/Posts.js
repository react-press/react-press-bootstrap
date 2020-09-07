
import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import { Row, Container, Col, Nav, Card, Button, Pagination } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {

    const [Img, setImg] = React.useState([]);

    useEffect(() => {
        console.log(posts);

        const author = posts[0].author;
        const featured_media = posts[1].featured_media;
        const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${ featured_media }`);
        const getAuthor = axios.get(`https://admin.react-press.net/wp-json/wp/v2/users/${ author }`);
    
        Promise.all([getImageUrl, getAuthor]).then(res => {
            setImg(res[0].data.source_url)
    })
    } , []);
    

  if (!loading) {
    return <h2>Loading...</h2>;
  }
  

  return (
      <React.Fragment>
            {posts.map(post => (

                <Col key ={post.id} lg={4} className="cared-sidebar">
                    <PostItem
                    post={post}
                    />
            </Col>
            ))}
        </React.Fragment>
  );
};

export default Posts;