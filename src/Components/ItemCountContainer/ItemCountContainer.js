import React, { useState,useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemCountContainer = ({stockT, onAdd}) => {
    
    console.log(stockT);
    const [stockTot, setStockTot] = useState(stockT);
    const [stockUsser, setStockUsser] = useState(0);
    const [compra] = useState(0);
    
    useEffect(() => {
        setStockTot(stockT);
        console.log(stockT);

    }, [stockTot,stockT])
    
    const sumar = () => {
        if (stockUsser < stockTot) {
            setStockUsser (stockUsser +1);
            console.log("sumar")
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
        <ItemCount stockUsser={stockUsser} stockTot={stockTot} sumar={sumar} restar={restar} onAdd={onAdd}  compra= {compra} /> 
    )
}

export default ItemCountContainer;


