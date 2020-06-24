import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button }from 'react-bootstrap';
import Hero from '../modules/Hero';


const Theme = () => (
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Page</title>
          <link rel="canonical" href="http://react-press.net" />
        </Helmet>
        <Hero/>
        <Container>
        <Row>
          <Col md={6}>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <span>this is a span</span>
          </Col>
          <Col className="d-block mt-3">
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="info">Info</Button>{' '}
          </Col>
        </Row>
        <Row>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies orci at justo mollis, nec semper sem tincidunt. Donec sit amet tristique justo. Maecenas ullamcorper vel felis ac blandit. Duis auctor iaculis tortor, id cursus ante cursus eu. In ut neque eu diam scelerisque tincidunt nec in ipsum. Cras pulvinar, massa vitae gravida sodales, turpis mi porta neque, at tincidunt mauris risus vitae quam. Ut efficitur est id purus maximus, porttitor ornare massa egestas. Curabitur accumsan interdum tristique. Nunc tellus lorem, luctus in faucibus commodo, auctor a ex. Vestibulum aliquam viverra ipsum eget finibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies orci at justo mollis, nec semper sem tincidunt. Donec sit amet tristique justo. Maecenas ullamcorper vel felis ac blandit. Duis auctor iaculis tortor, id cursus ante cursus eu. In ut neque eu diam scelerisque tincidunt nec in ipsum. Cras pulvinar, massa vitae gravida sodales, turpis mi porta neque, at tincidunt mauris risus vitae quam. Ut efficitur est id purus maximus, porttitor ornare massa egestas. Curabitur accumsan interdum tristique. Nunc tellus lorem, luctus in faucibus commodo, auctor a ex. Vestibulum aliquam viverra ipsum eget finibus.</p>
        </Row>
        </Container>
      </React.Fragment>   
);

export default Theme;