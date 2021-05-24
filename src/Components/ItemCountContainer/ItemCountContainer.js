import React, { useState,useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemCountContainer = ({datos, onAdd}) => {
    
   
    const [stockTot, setStockTot] = useState(datos.stockTotal);
    const [stockUsser, setStockUsser] = useState(0);
    const [compra] = useState(0);
    
    useEffect(() => {
        setStockTot(stockTot);
        console.log(stockTot);

    }, [stockTot])
    
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
        <ItemCount datos={datos} stockUsser={stockUsser} stockTot={datos.stockTotal} sumar={sumar} restar={restar} onAdd={onAdd}  compra= {compra} /> 
    )
}

export default ItemCountContainer;


