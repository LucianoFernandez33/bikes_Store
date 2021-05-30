import React from 'react';
import facebook from '../../Assets/facebook.png'
import instagram from '../../Assets/instagram.png'
import whatss from '../../Assets/whatss.png'
import email from '../../Assets/email.png'

import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <div className="container-list">
                    <h3>BIKES STORE</h3>
                    <p>SOMOS UNA EMPRESA DEDICADA AL ARMADO, REPARACIÓN Y VENTA DE BICICLETAS DE PASEO, MOUNTAIN BIKE, DE CARRERA Y FREESTYLE</p>
                    <div>
                        <ul className="socials">
                            <a href="https://www.facebook.com" target="blank"><li><img src={facebook} alt="logo de facebook"/></li></a>
                            <a href="https://www.instagram.com" target="blank"><li><img src={instagram} alt="logo de instagram"/></li></a>
                            <a href="https://web.whatsapp.com/" target="blank"><li><img src={whatss} alt="logo de whatssap"/></li></a>
                            <a class="correo" href="mailto: bikesStore@gmail.com"><li><img src={email} alt="logo de email"/></li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                    <p>Copyright 2021 - Design by <span>LUCIANO FERNANDEZ</span> </p>
            </div>
        </footer>
    )
}

export default Footer;
