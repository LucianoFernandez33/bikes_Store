import React, {useContext} from "react";
import carrito from '../../Assets/carrito.png';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CartWidget.css';
import {CartContext} from "../../Context/CartContext";

const CartWidget =() => {
    const {units} = useContext(CartContext);
    const vacio = units();
    
    //console.log(vacio)

    return (
        <div className="container-img">
            <Link to={`/cart`} ><Button className="button-carrito" variant="outline"><img src={carrito} alt=""/>{vacio != 0 ? <b>{vacio}</b> :<b>{}</b>} 
           </Button></Link>
           
        </div>
    
    )    
}
export default CartWidget;