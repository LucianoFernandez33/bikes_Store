import React, { useState, useContext,useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {CartContext} from "../../Context/CartContext";

const ItemCountContainer = ({datos, onAdd}) => {

   
    const [stockTot, setStockTot] = useState(datos.stockTotal);
    const [stockUsser, setStockUsser] = useState(0);
    const [compra, setCompra] = useState(0);
    const [buttonActive, setButtonActive] = useState (true);
    
    useEffect(() => {
        
    }, [stockTot,stockUsser])
    

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

    return (
        <ItemCount id={datos.id} stockUsser={stockUsser} stockTot={stockTot} sumar={sumar} restar={restar} onAdd={onAdd} buttonActive={buttonActive} compra= {compra} /> 
    )
}

export default ItemCountContainer;