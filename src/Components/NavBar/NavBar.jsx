import React from "react";
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget';

const NavBar =() => {
    return (
        <div style={{display: "flex",justifyContent: "center",backgroundColor: "yellowgreen", width: "100%"}}>
            <h1>Titulo</h1>
            <ul>
                <li>Enlace 1</li>
                <li>Enlace 2</li>
                <li>Enlace 3</li>
            </ul>
            <CartWidget/>
        </div>

    )    
}
export default NavBar;