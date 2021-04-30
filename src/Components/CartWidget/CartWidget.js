import React from "react";
import carrito from '../../Assets/carrito.png';
import {Button} from 'react-bootstrap';
import './CartWidget.css';
const CartWidget =() => {
    return (
        <div className="container-img">
            <Button className="button-carrito" variant="outline"><img src={carrito} alt=""/>
              <b id="contador"> 0</b></Button>{' '}
        </div>

    )    
}
export default CartWidget;