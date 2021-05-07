import React from 'react';
import facebook from '../../Assets/facebook.png'
import instagram from '../../Assets/instagram.png'
import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <h3>BIKES STORE</h3>
                <p>SOMOS UNA EMPRESA DEDICADA AL ARMADO, REPARACIÓN Y VENTA DE BICICLETAS DE PASEO, MOUNTAIN BIKE, DE CARRERA Y FREESTYLE</p>
                <ul className="socials">
                    <li><img src={facebook} alt="logo de facebook"/></li>
                    <li><img src={instagram} alt="logo de instagram"/></li>
                </ul>
            </div>
            <div className="footer-bottom">
                    <p>Copyright 2021 - Design by <span>LUCIANO FERNANDEZ</span> </p>
            </div>
        </footer>
    )
}

export default Footer;