import React from 'react';
import "./ItemHotSale.css"
import Item from '../Items/Item';
import sale from '../../Assets/sale.png'

const ItemHotSale = ({productos}) =>{

    return (
        
        <div className="container-productos-HotSale">
            <div className="container-tit-HotSale">
            <img src={sale} alt="logo de facebook"/>
                <h2>¡ ¡ ¡ HOT SALE ! ! !</h2>
                <p>APROVECHA NUESTRA OFERTAS DEL HOTSALE A PRECIOS INSUPERABLES!</p>
            </div>
            <div className="catalogo-HotSale">
                {productos.map((items)=>
                <div key={items.id} className="container-card-HotSale">
                    <Item img={items.img} tittle={items.tittle} description= {items.description} descriptionTwo= {items.descriptionTwo} descriptionThree= {items.descriptionThree} sizes={items.sizes} price={items.price} stockTotal= {items.stockTotal} id= {items.id}/>
                </div>
            )}
            </div>
        </div>
        
    )
}
 export default ItemHotSale;