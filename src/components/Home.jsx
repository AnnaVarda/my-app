import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Home() {
    return (

        <div className="homepage">
        <Container>
            <Row>
            <Col lg={6}>
            <h2>My Story</h2>
            <p>Lorem ipsum...</p>
            <Button>Read more...</Button>
            </Col>
           <Col>
           <p><Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg" alt="First dance image" fluid /></p>
           </Col> 
           </Row>

           <Row>
            <Col lg={6}>
           <p><Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg" alt="Second dance image" fluid /></p>
           </Col>
           <Col lg={6}>
            <h2>Dance Lessons</h2>
            <p>Lorem ipsum...</p>
            <Button>Read more...</Button>
            </Col>
            </Row>

            <Row>
            <Col lg={6}>
            <h2>Fitness Lessons</h2>
            <p>Lorem ipsum...</p>
            <Button>Read more...</Button>
            </Col>
           <Col lg={6}>
           <p><Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg" alt="First dance image" fluid /></p>
           </Col>
           </Row>
        </Container>
        </div>
    );
}

export default Home;