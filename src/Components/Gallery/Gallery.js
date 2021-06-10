import React from 'react';
import {Card} from 'react-bootstrap';
import gallery01 from '../../Assets/gallery01.jpg';
import './Gallery.css';

const Gallery = () => {

    return (
        <div className="container-gallery">
            <Card className="bg-dark text-white container-child">
                <Card.Img src={gallery01} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title> </Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Card.Text> </Card.Text>
                    </Card.ImgOverlay>
            </Card>             
        </div>
    )
};
export default Gallery;