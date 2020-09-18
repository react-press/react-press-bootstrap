import React, { useEffect, useState, useContext } from "react";
import { ReactPressContext } from "../../ReactPressProvider";
import Hero from "../main/Hero";
import { Row, Col, Container } from "react-bootstrap";

const FrontPage = () => {
  //context
  const context = useContext(ReactPressContext);
  const posts = context.posts;
  //state
  const [isLoaded, setIsLoaded] = useState(false);
  //hero props
  const title = "Front Page Title";
  const source_url = "http://via.placeholder.com/1980";

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <div className="front-page">
      <Container fluid>
        <Hero title={title} source_url={source_url} />
      </Container>
      <Container className="mt-5 mb-5">
        <Col md={12}>
          <h2>Services</h2>
        </Col>
        <Row>
          <Col md={4}>
            <h3>Service 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at elementum nibh, non viverra nunc.
            </p>
          </Col>
          <Col md={4}>
            <h3>Service 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at elementum nibh, non viverra nunc.
            </p>
          </Col>
          <Col md={4}>
            <h3>Service 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at elementum nibh, non viverra nunc.
            </p>
          </Col>
        </Row>
        <Col md={12}>
          <h2>Featured Posts</h2>
        </Col>
      </Container>
    </div>
  );
};

export default FrontPage;
