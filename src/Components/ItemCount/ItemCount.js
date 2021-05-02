import React from "react";
import './ItemCount.css';
import {Button} from 'react-bootstrap';

    const ItemCount = ({id, stockUsser, stockTotal, sumar, restar, onAdd, buttonActive}) =>{

    
    return (
            <>
                <p id={id} className="container-counter-stock">Stock: {stockTotal}</p>
            <div className="container-buttons">
                <div className="container-buttons-child">
                    <Button className="buttonSumar" onClick={sumar} disabled={!buttonActive}>+</Button>
                    <p className="container-counter">{stockUsser}</p>
                    <Button className="buttonRestar" onClick={restar} disabled={!buttonActive}>-</Button>
                </div>
                <Button className="buttonComprar" onClick={onAdd} disabled={!buttonActive}>AGREGAR AL CARRITO</Button>
            </div>    
            </>
        );
};
export default ItemCount;