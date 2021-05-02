import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemCountContainer = ({id, stock}) => {
    const [stockTotal, setStockTotal] = useState(stock);
    const [stockUsser, setStockUsser] = useState(0);
    const [compra, setCompra] = useState(0);
    const [buttonActive, setButtonActive] = useState (true);

    const sumar = () => {
        if (stockTotal === 0) {
            setButtonActive(false);
            if (stockUsser > 0) {
                setButtonActive(true);
            }
        }
        else if (stockTotal > 0) {
            setStockUsser (stockUsser +1);
            setStockTotal (stockTotal -1);
        }
    }
    const restar = () => {
        if (stockUsser === 0) {
            setStockUsser(0);
        }
        else if (stockTotal >= 0) {
            setStockUsser (stockUsser - 1);
            setStockTotal (stockTotal + 1);
        }
    }
    const onAdd = () =>{
        setCompra(stockUsser);
        alert (`USTED A COMPRADO ${stockUsser} UNIDADES!`)
    }

    return (
        <ItemCount id={id} stockUsser={stockUsser} stockTotal={stockTotal} sumar={sumar} restar={restar} onAdd={onAdd} buttonActive={buttonActive} compra= {compra} /> 
    )
}

export default ItemCountContainer;