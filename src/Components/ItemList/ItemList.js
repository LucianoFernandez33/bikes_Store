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
                {productos.map((datos)=>
                <div key={datos.id} className="container-card">
                    <Item img={datos.img} tittle={datos.tittle} description= {datos.description} price={datos.price} stock= {datos.stockTotal} id= {datos.id}/>
                </div>
            )}
            </div>
        </div>
        
    )
}
 export default ItemList;

