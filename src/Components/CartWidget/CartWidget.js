import React from "react";
import carrito from '../../Assets/carrito.png';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CartWidget.css';


const CartWidget =() => {
    return (
        <div className="container-img">
            <Link to={`/cart`} ><Button className="button-carrito" variant="outline"><img src={carrito} alt=""/>
              <b id="contador"> 0</b></Button></Link>{' '}
        </div>
    
    )    
}
export default CartWidget;