import React, {useContext, useState} from 'react';
import Input from './Input'
import ButtonOrder from './Button'
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import './CheckOut.css'
import firebase from "firebase/app";
import '../../firebase';
import { getFiresTore } from "../../firebase";
import { CartContext } from '../../Context/CartContext';



export default function CheckOut(){
    const {cart, addQuantityPrice,clear,stockTotal,totalPriceItems} = useContext(CartContext)
    const [userInfo, setUserInfo] = useState({name:'', surname:'', email: '', tel: null});
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState();
    const [orderId,setOrderId] = useState();
    console.log(cart);

    
    function handleInputChange(evt){
        setUserInfo({
            ...userInfo,
            [evt.target.name]: evt.target.value
        });
    }
    function onSubmit() {
        console.log(
            `SU NOMBRE ES ${userInfo.name} ${userInfo.surname} y tiene ${userInfo.tel} años`
        );
        createOrder();
    }

     async function createOrder(){
        setLoading(true)
        const db = getFiresTore();
        const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=>i.id));
        
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        const outOfStock = [];

        const orders = db.collection("orders");
        const newOrders= {
            buyer: userInfo,
            items: cart,
            date:firebase.firestore.FieldValue.serverTimestamp(),
            status: 'Orden en Proceso',
            total: addQuantityPrice(),
        };
        query.docs.forEach((docSnapshot, idx)=>{
            if (docSnapshot.data().stockTotal >= cart[idx].cantidad){
                batch.update(docSnapshot.ref, {stockTotal: docSnapshot.data().stockTotal - cart[idx].cantidad});
            }else{
                outOfStock.push({ ...docSnapshot.data(), id:docSnapshot.id});
            }
        })
        if (outOfStock.length === 0) {
            await batch.commit();
            try {
                const {id} = await orders.add(newOrders)
                setOrderId(id)
                console.log(id)
            }catch(err){console.log(err)}
        }
    } 
    console.log(cart)

    function printDiv(imprimeme) {
        var contenido= document.getElementById(imprimeme).innerHTML;
        var contenidoOriginal= document.body.innerHTML;
   
        document.body.innerHTML = contenido;
   
        window.print();
   
        document.body.innerHTML = contenidoOriginal;
   }
return (
    <>
    <div className="containerPrincipal-form">
        <h1>FORMULARIO DE CONTACTO</h1>
        <div className="container-form">
            <Input type="text" event={handleInputChange} text="Nombre" name="name"></Input>
            <Input type="text" event={handleInputChange} text="Apellido" name="surname"></Input>
            <Input type="email" event={handleInputChange} text="Email" name="email"></Input>
            <Input type="number" event={handleInputChange} text="Telefono" name="tel"></Input>
            <div className="containerForm-buttons">
                <Link to={`/cart`} className="button-volver">VOLVER</Link>
                <ButtonOrder  name={userInfo.name} surname={userInfo.surname} tel={userInfo.tel} event={onSubmit}></ButtonOrder>
            </div>
        </div>
    </div>
    <div>
    <div className="check-order">VERIFICACIÓN DE PEDIDO</div>
    
        <table className="checkout-order">
            <thead className="checkout-order__head">
                <th>TITULO</th>
                <th>CANTIDAD</th>
                <th>PRECIO </th>
                <th>SUBTOTAL:</th>
            </thead>
            <tbody>
                {cart.map(x=> {
                    <tr key={x.id} className="checkout-order__item">
                        <td>{x.tittle} </td>
                        <td>{x.cantidad}</td>
                        <td> $ {x.price} </td>
                        <td> $ {totalPriceItems(x.price, x.cantidad)}</td>
                    </tr>
                })}
                <li className="checkout-order__total">
                    <span>Total: </span> <span> $ {addQuantityPrice()} </span>
                </li>
          </tbody>
        </table>
    </div>
    
    
    {orderId &&
    <div id="imprimeme" className="container-modal">
        <div className="container-modal-child" >
            <Modal.Dialog >
                <Modal.Header >
                    <Modal.Title>FACTURA DE COMPRA</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>NUMERO DE SEGUIMIENTO DE ORDEN : <b>{orderId}</b></p>
                    <p>SE HA ENVIADO UN MAIL A SU CORREO CON LOS DATOS DE SU COMPRA Y EL CÓDIGO DE SEGUIMIENTO</p>
                    <p>GRACIAS POR SU COMPRA!</p>
                </Modal.Body>

                <Modal.Footer>
                <Link to={`/`} onClick={()=> clear()}><Button variant="secondary">CERRAR</Button></Link>
                    <Button onClick={()=>printDiv('imprimeme')} variant="primary">IMPRIMIR COMPROBANTE</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    </div>}
    </>
)
}