import React from "react";
import './cartWidget.css';
import carrito from '../../Assets/carrito.png';
import {Button} from 'react-bootstrap';
const CartWidget =() => {
    return (
        <div className="container-img">
            <Button><img src={carrito} alt=""/>
              <b id="contador"> 0</b></Button>{' '}
        </div>

    )    
}
export default CartWidget;