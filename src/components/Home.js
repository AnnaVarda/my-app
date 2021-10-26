import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Home() {
    return (

        <div className="homepage">
        <Container>
            <Row>
            <Col xs={6} md={4}>
            <h2>My Story</h2>
            <p>Lorem ipsum...</p>
            <Button>Read more...</Button>
            </Col>
           <Col xs={6} md={4}>
           <Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg" rounded />
           </Col>
            </Row>
            <Row>
            <Col xs={6} md={4}>
           <Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg" rounded />
           </Col>
            <Col xs={6} md={4}>
            <h2>My Story</h2>
            <p>Lorem ipsum...</p>
            <Button>Read more...</Button>
            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Home;