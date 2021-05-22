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
                {productos.map((datos)=>
                <div key={datos.id} className="container-card-HotSale">
                    <Item img={datos.img} tittle={datos.tittle} description= {datos.description} descriptionTwo= {datos.descriptionTwo} descriptionThree= {datos.descriptionThree} sizes={datos.sizes} price={datos.price} stockTotal= {datos.stockTotal} id= {datos.id}/>
                </div>
            )}
            </div>
        </div>
        
    )
}
 export default ItemHotSale;