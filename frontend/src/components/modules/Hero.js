import React from 'react';
import { Container, Jumbotron, Button }from 'react-bootstrap';


class Hero extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Jumbotron fluid>
                <Container>
                <h1>react-press-Bootstrap</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <Button variant="primary">Learn more</Button>
                </Container>
                </Jumbotron>
            </React.Fragment>   
        );
    }
}

export default Hero;