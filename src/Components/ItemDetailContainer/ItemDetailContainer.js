import React, { useState, useEffect, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer';
import PageError from "../PageError/PageError";
import Loading from '../../Components/Loading/Loading'
import { useParams } from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { getFiresTore } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = () => {

    const [show, setShow] = useState(true)
    const { addCart} = useContext(CartContext)
    const [datos, setDatos] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(false);
    const [noExist, setNoExist] = useState(false)

  useEffect(()=>{
    setLoading(true)
      const db = getFiresTore();
      const itemsCollection = db.collection("items");
      const itemDetail = itemsCollection.doc(id);
      itemDetail.get().then((doc)=>{
          if (!doc.exists) {
              setNoExist(true);
              return;
            }
            setDatos({id: doc.id, 
                ...doc.data()});
            
      }). catch((error) =>console.log("ocurrio un error",error))
      .finally(()=>setLoading(false))
      
    },[id])
    
    const onAdd = (cantidad) =>{
    addCart(datos,cantidad)
    toast.info("PRODUCTO AGREGADO AL CARRITO!");
    setShow(!show)
}

 return(
        <div>
            {noExist ? <PageError />  : loading ? <Loading /> : <ItemDetail datos={datos}/>}
            {show ? datos !== {} ? <div style={{marginBottom: '5px'}}><ItemCountContainer stockT={datos.stockTotal} onAdd={onAdd}/><a href="javascript: history.go(-1)">Volver</a></div>: <p>Cargando...</p> 
                : 
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Link  to={`/catalogo`}><Button variant="outline-secondary" className="buttonTerminarCompra">CONTINUAR COMPRANDO</Button></Link>
                <Link to={`/cart`} ><Button className="buttonTerminarCompra">TERMINAR COMPRA</Button></Link>
                <ToastContainer 
                    autoClose={1500}/>
            </div> }
        </div>  
    );     
};

export default ItemDetailContainer;