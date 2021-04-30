import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemDetail.css"
import "../ItemList/ItemList"
import Counter from '../Counter/Counter'
import venzo from '../../Assets/venzo.jpg'

const ItemDetail = ({img, description, tittle, price, stock}) =>{

    return (
        <div className="container-itemDetail-principal">
            <div className="container-card-itemDetail">
                <div className="container-card-img-itemDetail">
                    <img src={venzo}/>
                </div>
                <div className="container-card-body-itemDetail">
                    <h4>NUEVA VENZO LOKI EVO - SHADOW SERIES</h4>
                    <ul>
                        <li>Horquilla Venzo con regulación + bloqueo - Cuadro de Aluminio</li>
                        <li>21 velocidades con cambio, descarrilador y manijas SHIMANO</li>
                        <li>Ruedas VENZo con mazas a rulemanes, Corride a disco mecánico</li>
                        <li>Talles: 14"(XS), 16"(S), 18"(M), 20"(L), 22"(XL)</li>
                    </ul>
                    <p>STOCK: 10 {stock}</p>
                </div>
            </div>   
            <div>
                <Counter stock={stock}/>
            </div>
        </div>    
    )
};

export default ItemDetail;