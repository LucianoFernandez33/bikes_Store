import React from 'react';
import {Card} from 'react-bootstrap';
import gallery01 from '../../Assets/gallery01.jpg';
//import gallery02 from '../../Assets/gallery02.jpg';
//import gallery04 from '../../Assets/gallery04.jpg';

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
            {/*<div className="container-gallery-child">
                <Card className="bg-dark text-white container-child">
                    <Card.Img src={gallery02} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title> </Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Card.Text> </Card.Text>
                        </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white container-child">
                    <Card.Img src={gallery04} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title> </Card.Title>
                            <Card.Text>
                
                            </Card.Text>
                            <Card.Text> </Card.Text>
                        </Card.ImgOverlay>
                </Card>
            </div>*/}
            
        </div>
    )
};
export default Gallery;