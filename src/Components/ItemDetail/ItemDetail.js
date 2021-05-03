import React from 'react';
import "./ItemDetail.css";
import spy from '../../Assets/spy.jpg';
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer';

// Aca muestro la descripcion del producto que el usuario elige al hacer click en VER CARACTERISTICAS

const ItemDetail = ({datos, id}) =>{
   
    console.log(datos)
    
    return (
    
           <div key= {datos.id} className="container-itemDetail-principal">
               <div className="container-itemDetail-img">
                    <img src={spy} className="img-itemDetail" alt="imagen de paisaje con carretera"></img>
               </div>
            <div className="container-card-itemDetail">
                <div className="container-card-img-itemDetail">
                    <img src={datos.img}/>
                </div>
                    <div className="container-card-body-itemDetail">
                        <h4>{datos.tittle}</h4>
                        <ul>
                            <li>{datos.description}</li>
                            <li>21 velocidades con cambio, descarrilador y manijas SHIMANO</li>
                            <li>Ruedas VENZo con mazas a rulemanes, Corride a disco mecánico</li>
                            <li>Talles: 14"(XS), 16"(S), 18"(M), 20"(L), 22"(XL)</li>
                        </ul>
                    </div>
            </div>   
            <div>
                <ItemCountContainer id={id} stock={datos.stockTot}/>
            </div>
        </div> 
    
            
    )
};

export default ItemDetail;