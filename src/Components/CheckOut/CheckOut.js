import React, {useState} from 'react';
import Input from './Input'
import Button from './Button'
import {Link} from 'react-router-dom';
import './CheckOut.css'
import firebase from "firebase/app";
import { getFiresTore } from "../../firebase";


export default function CheckOut(){

    const [buyer, setBuyer] = useState({name:'', surname:'', age: null});
    const [loading, setLoading] = useState(false);

    function handleInputChange(evt){
        setBuyer({
            ...buyer,
            [evt.target.name]: evt.target.value
        });
    }
    function onSubmit() {
        console.log(
            `SU NOMBRE ES ${buyer.name} ${buyer.surname} y tiene ${buyer.age} años`
        );
    }

    /* function createOrder(){
        setLoading(true)
        const db = getFiresTore();
        const orders = db.collection("orders");
        const newOrders= {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.TimesTamp.fromDate(new Date()),
            total: price(),
        };
        orders.add(newOrders).then(({id}) =>{
            setOrderId(id);
        }).catch(err=>{setError(err);
        }).finally(()=>{setLoading(false);
        });

    } */
    
return (
    <>
    <div className="containerPrincipal-form">
        <h1>FORMULARIO DE CONTACTO</h1>
        <div className="container-form">
            <Input type="text" event={handleInputChange} text="Nombre" name="name"></Input>
            <Input type="text" event={handleInputChange} text="Apellido" name="surname"></Input>
            <Input type="number" event={handleInputChange} text="Edad" name="age"></Input>
            <div className="containerForm-buttons">
                <Link to={`/cart`} className="button-volver">VOLVER</Link>
                <Button  name={buyer.name} surname={buyer.surname} age={buyer.age} event={onSubmit}></Button>
            </div>
        </div>
    </div>
    </>
)
}