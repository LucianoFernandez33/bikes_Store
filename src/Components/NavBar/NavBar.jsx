    import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo2 from '../../Assets/logo2.png'
import CartWidget from '../CartWidget/CartWidget';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './NavBar.css';
//
const NavBar =() => {
    return (
        <div className="container-nav">
            <Navbar collapseOnSelect expand="lg" className="container-nav-child">
                <img src={logo2} className="App-logo" alt="logo" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="mr-auto">
                        <li><Link to={`/`} >HOME</Link></li>
                        <li><NavDropdown title="ARTICULOS" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={`/categories/bikes`}>BICICLETAS</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/categories/accesories`}>ACCESORIOS</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/catalogo`}>VER TODO</Link></NavDropdown.Item>
                            </NavDropdown></li>
                        <li><Link to={`/sobre-nosotros`} >NOSOTROS</Link></li>
                        <CartWidget/>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </div>
            
    )    
}
export default NavBar;