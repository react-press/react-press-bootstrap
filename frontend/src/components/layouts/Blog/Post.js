import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Hero from '../../main/Hero';


const Post = ({post, source_url}) => {
  

    return (
      <div className={'single-' + post.type + ` ${post.type}-` + post.id }>
      <Container fluid>
        <Hero
          title={post.title.rendered}
          source_url={source_url}
        />
        </Container>        
        <Container>
        <Row>
          <div className="content-single" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        </Row>
      </Container>  
    </div>
    )
    
}

export default Post;