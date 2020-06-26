import React from 'react';
import { Row, Col, Container, Card, Nav, Button } from 'react-bootstrap';
import Posts from '../../modules/archives/Posts';
import Sidebar from '../../modules/archives/Sidebar';

const Archive = () => (
        <Container>
            <Row className="archive">
                <Sidebar/>
                <Posts/>
            </Row>
        </Container>
  ); 
  
  export default Archive;  
