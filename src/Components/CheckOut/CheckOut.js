import React, {useContext, useState} from 'react';
import Input from './Input'
import ButtonOrder from './Button'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './CheckOut.css'
import firebase from "firebase/app";
import '../../firebase';
import { getFiresTore } from "../../firebase";
import { CartContext } from '../../Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tilde from '../../Assets/tilde.png';


export function CheckOut(){
    const {cart, addQuantityPrice,clear,setOrderUsser} = useContext(CartContext)
    const [userInfo, setUserInfo] = useState({name:'', surname:'', email: '', emailDos:'', direccion:'', tel: null});
    const [orderId,setOrderId] = useState();
    const [message, setMessage] = useState(null);
    
    
    function handleInputChange(evt){
        setUserInfo({
            ...userInfo,
            [evt.target.name]: evt.target.value
        });
    }
    function onSubmit() {
        if(userInfo.email !== userInfo.emailDos){
            setMessage("**Parece que los emails que ingresaste no coinciden**")
          }else{
            setMessage("");
            toast.info("PROCESANDO COMPRA...");
            createOrder();
            clear();
        }
    }

     async function createOrder(){
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
                setOrderUsser(id,userInfo,cart)
            }catch(err){console.log(err)} 
        }
    } 
    
    function printDiv(imprimeme) {
        var contenido= document.getElementById(imprimeme).innerHTML;
        var contenidoOriginal= document.body.innerHTML;
   
        document.body.innerHTML = contenido;
   
        window.print();
   
        document.body.innerHTML = contenidoOriginal;
   }
   
return (
    <>
    {!orderId ?
    <div className="containerPrincipal-form">
        <h1>FORMULARIO DE CONTACTO</h1>
        <div className="container-form">
            <Input type="text" event={handleInputChange} text="Nombre" name="name"></Input>
            <Input type="text" event={handleInputChange} text="Apellido" name="surname"></Input>
            <Input type="text" event={handleInputChange} text="Dirección" name="direccion"></Input>
            <Input type="number" event={handleInputChange} text="Telefono" name="tel"></Input>
            <Input type="email" event={handleInputChange} text="Email" name="email"></Input>
            <Input type="email" event={handleInputChange} text="Validar Email" name="emailDos"></Input>
                <p className="error-email">{message}</p>
            
            <div className="containerForm-buttons">
                <Link to={`/cart`} className="button-volver">VOLVER</Link>
                <ButtonOrder  name={userInfo.name} surname={userInfo.surname} tel={userInfo.tel} email={userInfo.email}event={onSubmit}></ButtonOrder>                
                <ToastContainer 
                    position="bottom-center"
                    autoClose={1200}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover/>
            </div> 
        </div>  
    </div>
         :
            <div className="container-order-ok">
                <div className="container-child-order-ok">
                    <h5>SU ORDEN FUÉ GENERADA CON ÉXITO !</h5>
                    <img src={tilde} alt=""/>
                    <p style={{color: 'black', fontWeight: 'bold', textDecoration: 'underline',marginTop: '5px'}}>Nº DE ORDEN: </p>
                    <p style={{backgroundColor: '#29c4f3', color: 'white'}}>{orderId}</p>
                    <Link to={`/Orders`}><Button variant="secondary">VER ORDEN DE COMPRA</Button></Link>
                </div>
            </div>
               
        }
        
        </>
)
}
export default CheckOut;