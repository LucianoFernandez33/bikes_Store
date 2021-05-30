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
    const {cart, addQuantityPrice,clear} = useContext(CartContext)
    const [userInfo, setUserInfo] = useState({name:'', surname:'', email: '', age: null});
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
            `SU NOMBRE ES ${userInfo.name} ${userInfo.surname} y tiene ${userInfo.age} años`
        );
        createOrder();
    }

     function createOrder(){
        setLoading(true)
        const db = getFiresTore();
        const orders = db.collection("orders");
        const newOrders= {
            buyer: userInfo,
            items: cart,
            date:firebase.firestore.FieldValue.serverTimestamp(),
            //date: firebase.firestore.TimesTamp.fromDate(new Date()),
            total: addQuantityPrice(),
        };
        orders.add(newOrders).then(({id}) =>{
            setOrderId(id);
            console.log(id)
        }).catch(err=>{setError(err);
        }).finally(()=>{setLoading(false);
        });

    } 
    
return (
    <>
    <div className="containerPrincipal-form">
        <h1>FORMULARIO DE CONTACTO</h1>
        <div className="container-form">
            <Input type="text" event={handleInputChange} text="Nombre" name="name"></Input>
            <Input type="text" event={handleInputChange} text="Apellido" name="surname"></Input>
            <Input type="email" event={handleInputChange} text="Email" name="email"></Input>
            <Input type="number" event={handleInputChange} text="Edad" name="age"></Input>
            <div className="containerForm-buttons">
                <Link to={`/cart`} className="button-volver">VOLVER</Link>
                <ButtonOrder  name={userInfo.name} surname={userInfo.surname} age={userInfo.age} event={onSubmit}></ButtonOrder>
            </div>
        </div>
    </div>
    {orderId &&
    <div className="container-modal">
        <div className="container-modal-child" >
            <Modal.Dialog >
                <Modal.Header >
                    <Modal.Title>FACTURA DE COMPRA</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>NUMERO DE SEGUIMIENTO DE ORDEN : <b>{orderId}</b></p>
                    <p>GRACIAS POR SU COMPRA</p>
                </Modal.Body>

                <Modal.Footer>
                <Link to={`/`} onClick={()=> clear()}><Button variant="secondary">Close</Button></Link>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    </div>}
    </>
)
}