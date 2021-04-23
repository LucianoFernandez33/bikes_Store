import React from 'react';
import Item from './Item';

const ItemList = ({productos}) =>{

    return (
        <>
        <div className="catalogo">Catalogo</div>
        {productos.map((arrayItems)=>
        <div key={arrayItems.id}>
            <Item img={arrayItems.img} title={arrayItems.title} description= {arrayItems.description} price={arrayItems.price} stock= {arrayItems.stock}/>
        </div>
        )}
        </>
    )
}
 export default ItemList;

