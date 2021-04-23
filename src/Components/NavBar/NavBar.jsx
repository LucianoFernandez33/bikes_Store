import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo2 from '../../assets/logo2.png'
import './NavBar.css';
import {Navbar,Nav} from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';

const NavBar =() => {
    return (
        <div className="container-nav">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="container-nav-child">
                <img src={logo2} className="App-logo" alt="logo" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">BICICLETAS</Nav.Link>
                        <Nav.Link href="#pricing">ACCESORIOS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Navbar>
        </div>
            
    )    
}
export default NavBar;