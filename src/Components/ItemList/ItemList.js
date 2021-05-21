import React from 'react';
import "./ItemList.css"
import Item from '../Items/Item';
import {Image} from 'react-bootstrap';

// al implementar FIREBASE cambie el datos por el "items" que es de donde vienen mis productos ahora
const ItemList = ({productos}) =>{

    return (
        
        <div className="container-productos">
            <div className="container-img-catalogo">
                <Image className="img-catalogo" src="../fondoBikes.jpg" fluid />
            </div>
            <div className="container-tit">CATÁLOGO DE PRODUCTOS</div>
            <div className="catalogo">
                {productos.map((items)=>
                <div key={items.id} className="container-card">
                    <Item img={items.img} tittle={items.tittle} description= {items.description} descriptionTwo= {items.descriptionTwo} descriptionThree= {items.descriptionThree} sizes={items.sizes} price={items.price} stockTotal= {items.stockTotal} id= {items.id}/>
                </div>
            )}
            </div>
        </div>
        
    )
}
 export default ItemList;

