import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Container, Col, Nav, Card, Button, Pagination } from 'react-bootstrap';


const PostLoop = (props) => {

    const [post, setPost] = React.useState(props.post);
    const [img, setImg] = React.useState([]);

    useEffect(() => {

        const { featured_media, author } = props.post;
        const getImageUrl = axios.get(`https://admin.react-press.net/wp-json/wp/v2/media/${ post.featured_media }`);
        const getAuthor = axios.get(`https://admin.react-press.net/wp-json/wp/v2/users/${ post.author }`);

        Promise.all([getImageUrl, getAuthor]).then(res => {
            console.log(res[0].data.source_url);
            setImg(res[0].data.source_url)
            // this.setState({
            //     imgUrl: res[0].data.media_details.sizes.full.source_url,
            //     author: res[1].data.name,
            //     isLoaded: true
            // });
    })
});



return (
            <Col lg={4} className="cared-sidebar">
            <Card className="w-100">
            <Link to={`/${post.slug}`}><Card.Img variant="top" src={img}/></Link>
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
)
}

export default PostLoop;