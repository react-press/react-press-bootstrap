import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const Hero = ({ title, source_url }) => {
  return (
    <React.Fragment>
      <Row
        className="hero"
        style={{
          backgroundImage: `url(${source_url})`,
        }}
      >
        <div className="background-overlay"></div>
        <Container>
          <Col sm={12} md={10}>
            <h1>{title}</h1>
          </Col>
        </Container>
      </Row>
    </React.Fragment>
  );
};

export default Hero;
