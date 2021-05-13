import React, { useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {CartContext} from "../../Context/CartContext";

const ItemCountContainer = ({id, stockTotal}) => {
    
    const [cart, setCart] = useContext(CartContext)
    const [stockTot, setStockTot] = useState(stockTotal);
    const [stockUsser, setStockUsser] = useState(0);
    const [compra, setCompra] = useState(0);
    const [buttonActive, setButtonActive] = useState (true);
    
    

    const sumar = () => {
        if (stockTot === 0) {
            setButtonActive(false);
            if (stockUsser > 0) {
                setButtonActive(true);
            }
        }
        else if (stockTot > 0) {
            setStockUsser (stockUsser +1);
            setStockTot (stockTot -1);
        }
    }
    const restar = () => {
        if (stockUsser === 0) {
            setStockUsser(0);
        }
        else if (stockTot >= 0) {
            setStockUsser (stockUsser - 1);
            setStockTot (stockTot + 1);
        }
    }
    const onAdd = () =>{
        if (stockUsser === 0) {
            alert (`Debe elegir al menos una unidad para agregar al carrito`)
        }else {
            setCompra(stockUsser);
            setCart([...cart,{id,"cantidad":stockUsser}])
            //alert (`USTED A COMPRADO ${stockUsser} UNIDADES!`)
            
            
        }
    }

    return (
        <ItemCount id={id} stockUsser={stockUsser} stockTot={stockTot} sumar={sumar} restar={restar} onAdd={onAdd} buttonActive={buttonActive} compra= {compra} /> 
    )
}

export default ItemCountContainer;