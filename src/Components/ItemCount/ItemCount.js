import React from "react";
import './ItemCount.css';
import {Button} from 'react-bootstrap';

    const ItemCount = ({id, stockUsser, stockTotal, sumar, restar, onAdd, buttonActive}) =>{

    
    return (
            <>
            <div className="container-buttons">
                <div className="container-buttons-child">
                    <Button className="buttonSumar" >+</Button>
                    <p className="container-counter">0</p>
                    <Button className="buttonRestar">-</Button>
                </div>
                <Button className="buttonComprar">AGREGAR AL CARRITO</Button>
            </div>    
            </>
        );
};
export default ItemCount;