import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


const Counter = ()=> {
    const [value, setValue] = useState(0);

    function show() {
        alert ('Agregaste ${value} al carrito');
    }
    const down = () =>{
        value > 0 ? setValue (value - 1) : setValue(value);
    };
    const upp = () => {
        6 - value > 0 ? setValue (value + 1) : setValue(value)
    };
    
    return (
            <>
                <p>{value}</p>
                <Button onClick={upp} disable={value===5}>+</Button>

                <Button onClick={down}>-</Button>
                <Button onClick={show}>Agregar al carrito</Button>
            </>
        );
};
export default Counter;