import React from 'react';
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

// Aca muestro la descripcion del producto que el usuario elige al hacer click en VER CARACTERISTICAS

const ItemDetail = ({datos}) =>{
   
    console.log(datos)
    
    return (
    
           <div key= {datos.id} className="container-itemDetail-principal">
            <div className="container-card-itemDetail">
                <div className="container-card-img-itemDetail">
                    <img src={datos.img}/>
                </div>
                <div className="container-card-body-itemDetail">
                    <h4>{datos.tittle}</h4>
                    <ul>
                        <li>Horquilla Venzo con regulación + bloqueo - Cuadro de Aluminio</li>
                        <li>21 velocidades con cambio, descarrilador y manijas SHIMANO</li>
                        <li>Ruedas VENZo con mazas a rulemanes, Corride a disco mecánico</li>
                        <li>Talles: 14"(XS), 16"(S), 18"(M), 20"(L), 22"(XL)</li>
                    </ul>
                    <p>STOCK: 10 {datos.stock}</p>
                </div>
            </div>   
            <div>
                <ItemCount stock={datos.stock}/>
            </div>
        </div> 
    
            
    )
};

export default ItemDetail;