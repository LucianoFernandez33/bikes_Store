import React, {useContext} from "react";
import './ItemCart.css'
import {Card, Button} from 'react-bootstrap';
import {CartContext} from "../../Context/CartContext";
import {Link} from 'react-router-dom';



const ItemCart = ()=>{

    const {cart , clear, removeItem, addQuantityPrice, totalPriceItems}  = useContext(CartContext)
       
    return(
        <>
        {cart.length>0 ?
            <div>
                <div className="container-cart">
                <h1>TU CARRITO DE COMPRAS</h1>
                {cart.map(x=>
                <Card className="container-child-cartShop" >
                    <Card.Img className="imag-cart" variant="top" src={x.img} />
                    <Card.Body className="container-col-cartShop" >
                        <Card.Title>{x.tittle}</Card.Title>
                        <Card.Text>PRECIO: $ {x.price}</Card.Text>
                        <Card.Text>Cantidad : {x.cantidad}</Card.Text>
                        <Card.Text>PRECIO TOTAL: $ {totalPriceItems(x.price, x.cantidad)} </Card.Text>
                    </Card.Body>
                    <Card.Body className="container-col-cartShop-buttons">
                        <Button variant="outline-secondary" className="buttonCartRemove" onClick={() => removeItem(x.id)}>BORRAR PRODUCTO</Button>
                    </Card.Body>
                </Card>)}
            </div>
            <div>
                <p className="totCompra">TOTAL COMPRA: $ {addQuantityPrice()}</p>
                <div className="containerButtonCompra">
                    <Button variant="outline-secondary" className="buttonCart"><Link  to={`/catalogo`}>CONTINUAR COMPRANDO</Link></Button>
                    <Button variant="outline-secondary" className="buttonCart"><Link  to={`/CheckOut`}>TERMINAR COMPRA</Link></Button>
                    <Button variant="outline-secondary" className="buttonCart" onClick={()=> clear()} >VACIAR CARRITO</Button>  
                </div>
            </div>
            </div>
            :
            <div className="cartVacio">
                <div className="cartVacio-child">
                    <p>TU CARRITO SE ENCUENTRA VACÍO</p>
                    <Button variant="outline-secondary"className="buttonCart"><Link  to={`/catalogo`}>IR A CATALOGO</Link></Button>  
                </div>
            </div>
            }  
        </>
    )
}

export default ItemCart;