import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav, Card, Button, Pagination } from 'react-bootstrap';



const PostItem = ({ posts, loading, post }) => {

    const [Img, setImg] = React.useState([]);

    useEffect(() => {
        console.log(post);

        const author = post.author;
        const featured_media = post.featured_media;
        const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${ featured_media }`);
        const getAuthor = axios.get(`https://admin.react-press.net/wp-json/wp/v2/users/${ author }`);
    
        Promise.all([getImageUrl, getAuthor]).then(res => {
            setImg(res[0].data.source_url)
    })
    } , []);
    

  if (loading) {
    return <h2>Loading...</h2>;
  }
  

  return (
            <Card className="w-100">
                <Link to={`/${post.slug}`}><Card.Img variant="top" src={Img} /></Link>
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
  );
};

export default PostItem;