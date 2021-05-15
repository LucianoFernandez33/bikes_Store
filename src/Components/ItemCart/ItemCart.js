import React, {useContext, useEffect} from "react";
import './ItemCart.css'
import {Card, Button} from 'react-bootstrap';
import {CartContext} from "../../Context/CartContext";

const ItemCart = ()=>{

    const {cart , clear, removeItem, addQuantityPrice}  = useContext(CartContext)
    console.log("carrito", cart)
    
    //cart.forEach(element => {
    //    console.log(element.id)
    //});

    return(
        <>
        <div className="container-cart">
            <h1>TU CARRITO DE COMPRAS</h1>
            {cart.map(x=>
            <Card className="container-child-cartShop">
                <Card.Img className="imag-cart" variant="top" src={x.img} />
                <Card.Body>
                    <Card.Title>{x.title}</Card.Title>
                    <Card.Text>{x.description}</Card.Text>
                    <Card.Text>{x.descriptionTwo}</Card.Text>
                    <Card.Text>PRECIO: $ {x.price}</Card.Text>
                    <Card.Text>Cantidad : {x.cantidad}</Card.Text>
                    <Card.Text>PRECIO TOTAL: $  </Card.Text>
                    <Button variant="primary">Comprar</Button>
                    <Button variant="warning" onClick={() => removeItem(x.id)}>Borrar Producto</Button>
                </Card.Body>
            </Card>)}
            <p>TOTAL COMPRA: $ {addQuantityPrice()}</p>
        </div>
        <div>
            <Button variant="success" onClick={`/`} >TERMINAR COMPRA</Button>
            <Button variant="danger" onClick={()=> clear()} >VACIAR CARRITO</Button>
        </div>
        </>
    )
}

export default ItemCart;