import React from "react";
import './ItemCount.css';
import {Button} from 'react-bootstrap';

    const ItemCount = ({id, stockUsser, stockTot, sumar, restar, onAdd}) =>{

    
    return (
            <> 
            <div className="container-counter-itemDetail">
                <p id={id} className="container-counter-stock">Stock: {stockTot}</p>
                 <div className="container-buttons">
                <div className="container-buttons-child">
                    <Button className="buttonSumar" onClick={sumar} disabled={stockTot === 0}>+</Button>
                    <p className="container-counter">{stockUsser}</p>
                    <Button className="buttonRestar" onClick={restar} disabled={stockUsser === 0}>-</Button>
                </div>
                <Button className="buttonComprar" onClick={()=> onAdd(stockUsser)} disabled={stockUsser === 0}>AGREGAR AL CARRITO</Button>
                </div> 
            </div>   
            </>
        );
};
export default ItemCount;