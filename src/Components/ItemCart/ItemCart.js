import React, {useContext} from "react";
import './ItemCart.css'
import {Card, Button} from 'react-bootstrap';
import {CartContext} from "../../Context/CartContext";
import {Link} from 'react-router-dom';

const ItemCart = ()=>{

    const {cart , clear, removeItem, addQuantityPrice, totalPriceItems}  = useContext(CartContext)
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
                    <Card.Text>PRECIO TOTAL: $ {totalPriceItems(x.price, x.cantidad)} </Card.Text>
                    <Button variant="primary">Comprar</Button>
                    <Button variant="warning" onClick={() => removeItem(x.id)}>Borrar Producto</Button>
                </Card.Body>
            </Card>)}
        </div>
        <div>
            <p className="totCompra">TOTAL COMPRA: $ {addQuantityPrice()}</p>
            <Button variant="warning"><Link className="button-volver" to={`/catalogo`}>CONTINUAR COMPRANDO</Link></Button>
            <Button variant="success" onClick={`/`} >TERMINAR COMPRA</Button>
            <Button variant="danger" onClick={()=> clear()} >VACIAR CARRITO</Button>
        </div>
        </>
    )
}

export default ItemCart;