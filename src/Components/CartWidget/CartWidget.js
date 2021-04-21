import React from "react";
import './cartWidget.css';
import carrito from '../../assets/carrito.png';

const CartWidget =() => {
    return (
        <div className="container-img">
            <img src={carrito} className="img-carrito" alt="carrito de compra" />
        </div>

    )    
}
export default CartWidget;