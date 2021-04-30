import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Counter.css';
import {Button} from 'react-bootstrap';


const Counter = ({})=> {
    const [value, setValue] = useState(0);
    
    function show() {
        alert (`Agregaste ${value} producto al carrito`);
    }
    const down = () =>{
        value > 0 ? setValue (value - 1) : setValue(value);
    };
    const upp = () => {
        6 - value > 0 ? setValue (value + 1) : setValue(value)
    };
    
    return (
            <>
            <div className="container">
                <div className="container-buttons">
                    <Button className="buttonSumar" onClick={upp} disable={value===5} >+</Button>
                    <p className="container-counter">{value}</p>
                    <Button onClick={down} className="buttonRestar">-</Button>
                </div>
                <Button className="buttonComprar" onClick={show}>AGREGAR AL CARRITO</Button>
            </div>    
            </>
        );
};
export default Counter;