import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

const Hero = ({ pageTitle, source_url, excerpt }) => {
    
  
    return (
        <React.Fragment>
            
            <Row className="hero" 
                style={{
                backgroundImage: `url(${source_url})` }}>
                    <div className="background-overlay"></div>
                    <Container>
                    <Col sm={12} md={10}>
                    <h1>{pageTitle}</h1>
                    <p dangerouslySetInnerHTML={{__html: excerpt}}></p>
                    </Col>
                </Container>
            </Row>
      
        </React.Fragment>
    );
  };
  
  export default Hero;