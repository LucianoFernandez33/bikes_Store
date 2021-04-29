import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import './Home.css';
import carousel01 from '../../Assets/carousel01.jpg';
import carousel02 from '../../Assets/carousel02.jpg';
import carousel03 from '../../Assets/carousel03.jpg';

const Home = () =>{

    return (
        <div className="container-card-carousel">
            <Carousel className="container-carousel-child">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {carousel01}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Bike Store Vuela Alto</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel02}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Bike Store Vuela Alto</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel03}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Bike Store Vuela Alto</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>   
    )
};

export default Home;