import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo192.png'
import './NavBar.css';
import {Navbar,Nav} from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';

const NavBar =() => {
    return (
        <div className="navBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="container-nav">
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Link-1</Nav.Link>
                        <Nav.Link href="#pricing">Link-2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Navbar>
            
        </div>

    )    
}
export default NavBar;