import React from 'react';
import "./ItemDetail.css";
import spy from '../../Assets/spy.jpg';


const ItemDetail = ({datos}) =>{
       
    return (
    
           <div key= {datos.id} className="container-itemDetail-principal">
               <div className="container-itemDetail-img">
                    <img src={spy} className="img-itemDetail" alt="imagen de paisaje con carretera"></img>
               </div>
            <div className="container-card-itemDetail">
                <div className="container-card-img-itemDetail">
                    <img src={datos.img} alt="imagenes de productos a la venta"/>
                </div>
                    <div className="container-card-body-itemDetail">
                        <h4>{datos.tittle}</h4>
                        <ul>
                            <li>{datos.description}</li>
                            <li>{datos.descriptionTwo}</li>
                            <li>{datos.descriptionThree}</li>
                            <li>{datos.sizes}</li>
                            <li className="precioProd">PRECIO : $ {datos.price}</li>
                        </ul>
                    </div>
            </div>   
        </div> 
    
            
    )
};

export default ItemDetail;