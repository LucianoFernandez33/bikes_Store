import React, {useContext, useEffect} from "react";
import './ItemCart.css'
import {Card, Button} from 'react-bootstrap';
import {CartContext} from "../../Context/CartContext";

const ItemCart = ()=>{

    const [cart,] = useContext(CartContext)
    console.log("carrito", cart)
    
    
    cart.forEach(element => {
        console.log(element.id)
    });

    return(
        <div className="container-cart">
            <h1>TU CARRITO DE COMPRAS</h1>
            {cart.map(x=>
            <Card className="container-child-cartShop">
                <Card.Img className="imag-cart" variant="top" src={x.img} />
                <Card.Body>
                    <Card.Title>{x.title}</Card.Title>
                    <Card.Text>{x.description}</Card.Text>
                    <Card.Text>{x.descriptionTwo}</Card.Text>
                    <Card.Text>{x.descriptionThree}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>)}
        </div>
    )
}

export default ItemCart;