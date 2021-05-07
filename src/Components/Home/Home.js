import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Container, Image, Row, Col} from 'react-bootstrap';
import './Home.css';
import carousel04 from '../../Assets/carousel04.png';
import carousel08 from '../../Assets/carousel08.jpg';
import carousel07 from '../../Assets/carousel07.jpg';

const Home = () =>{

    return (
        <div className="container-home">
            <div className="container-card-carousel">
                <Carousel className="container-carousel-child">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {carousel04}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel08}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel07}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div> 
            <div className="container-cards-sponsors">
                <Container className="container-child-cards-sponsors">
                    <Row>
                        <Col>
                        <Image className="img-sponsors" src="../logo-venzo.jpg" roundedCircle />
                        </Col>
                        <Col>
                        <Image className="img-sponsors" src="../logo-vairo.png" roundedCircle />
                        </Col>
                        <Col>
                        <Image className="img-sponsors" src="../logo-spy.png " roundedCircle />
                        </Col>
                    </Row>
                </Container>
            </div>  
        </div>
    )
};

export default Home;