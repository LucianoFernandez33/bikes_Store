import React, {useContext, useEffect} from "react";
import './ItemCart.css'
import {Card, Button} from 'react-bootstrap';
import {CartContext} from "../../Context/CartContext";

const ItemCart = ()=>{

    const [cart, setCart] = useContext(CartContext)
    console.log("carrito", cart)
    
    
    cart.forEach(element => {
        console.log(element.id)
    });

    return(
        <div className="container-cart">
            <h1>TU CARRITO DE COMPRAS</h1>
            <Card className="container-child-cartShop">
                <Card.Img className="imag-cart" variant="top" src="../spy-bullet.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCart;