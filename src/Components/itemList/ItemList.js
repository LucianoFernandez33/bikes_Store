import React from 'react';
import "./ItemList.css"
import Item from '../Items/Item';
import {Image} from 'react-bootstrap';


const ItemList = ({productos}) =>{

    return (
        
        <div className="container-productos">
            <div className="container-img-catalogo">
                <Image className="img-catalogo" src="./venzoMural.jpg" fluid />
            </div>
            <div className="container-tit">CATÁLOGO DE PRODUCTOS</div>
            <div className="catalogo">
                {productos.map((arrayItems)=>
                <div key={arrayItems.id} className="container-card">
                    <Item img={arrayItems.img} tittle={arrayItems.tittle} description= {arrayItems.description} price={arrayItems.price} stock= {arrayItems.stock}/>
                </div>
            )}
            </div>
        </div>
        
    )
}
 export default ItemList;

