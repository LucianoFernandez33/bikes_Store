import React from 'react';
import {Figure} from 'react-bootstrap';
import visa from '../../Assets/visa.png';
import masterCard from '../../Assets/masterCard.png';
import maestro from '../../Assets/maestro.png';
import courier from '../../Assets/courier.png';
import proteger from '../../Assets/proteger.png';
import './GallerySend.css';

const GallerySend = () => {

    return (
        <div className="container-gallerySend">
            <Figure style={{padding:'16px'}}>
                <div className="container-figures"> 
                    <Figure.Image className="imageGallery"
                        src={visa}
                        />
                    <Figure.Image className="imageGallery"
                        src={masterCard}
                        />
                    <Figure.Image className="imageGallery"
                        src={maestro}
                        />
                    <Figure.Image className="imageGallery"
                        src={proteger}
                        />
                    <Figure.Image className="imageGallery"
                        src={courier}
                        />
                </div>
                <Figure.Caption className="footer-figures">
                    COMPRÁ CON TODAS LAS TARJETAS EN CUOTAS, BRINDAMOS COMPRA SEGURA Y ENVÍO A DOMICILIO GRATIS. 
                </Figure.Caption>
        </Figure>            
        </div>
    )
};
export default GallerySend;