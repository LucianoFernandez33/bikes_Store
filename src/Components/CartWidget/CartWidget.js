import React, {useContext, useEffect, useState} from "react";
import carrito from '../../Assets/carrito.png';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CartWidget.css';
import {CartContext} from "../../Context/CartContext";

const CartWidget =() => {
    const {units} = useContext(CartContext);
    const [p,setP] = useState(false);
    //const vacio = units();
   // if (vacio == 0){
   //     setP(false)
    //};

    console.log(units())

   // useEffect(()=>{
    //    console.log(vacio)
//
    //},[vacio,units])

    //<b className="contador">{units()}</b>
    return (
        <div className="container-img">
            <Link to={`/cart`} ><Button className="button-carrito" variant="outline"><img src={carrito} alt=""/> 
           </Button></Link>
           {<span >{units()}</span>}
        </div>
    
    )    
}
export default CartWidget;
//className={units == 0 ? 'contadorVacio' : 'contador'}