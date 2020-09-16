import React from 'react';
import {Spinner, Container, Row} from 'react-bootstrap';

const Loading = () => {

    return (
        <Container fluid className="loader">
            <Row>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Row>
        </Container>

    )
}

export default Loading