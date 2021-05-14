import React, { useState, useContext,useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {CartContext} from "../../Context/CartContext";

const ItemCountContainer = ({datos, onAdd}) => {

   
    const [stockTot, setStockTot] = useState(datos.stockTotal);
    const [stockUsser, setStockUsser] = useState(0);
    const [compra, setCompra] = useState(0);
    
    useEffect(() => {
        
    }, [stockTot,stockUsser])
    

    const sumar = () => {
        if (stockTot > 0) {
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
        <ItemCount id={datos.id} stockUsser={stockUsser} stockTot={stockTot} sumar={sumar} restar={restar} onAdd={onAdd}  compra= {compra} /> 
    )
}

export default ItemCountContainer;