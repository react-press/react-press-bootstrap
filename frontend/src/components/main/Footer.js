import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-center pb-3">
      <Container>
        <Row>
          <Col className="align-self-center">
            <p>Created By Andrew & Von</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
