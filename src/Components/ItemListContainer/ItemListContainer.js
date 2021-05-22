import React, { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import {Spinner} from 'react-bootstrap';
import { useParams } from "react-router";
import {getFiresTore} from "../../firebase";


export const ItemListContainer = () => {
   
  
   const [datos, setDatos] = useState([])
   //const [items, setItems] = useState([])
   const {id} = useParams();
   const [loading, setLoading] = useState(false);

   useEffect(()=>{
      setLoading(true)
      const db = getFiresTore();  //guardo en variable db el acceso a mi base de datos en fireBase
      const itemsCollection = db.collection("items"); //guardo en itemsCollection toda mi coleccion de items de firebase
      itemsCollection.get() //ejecuto una promesa y ejecuto un .then para capturar la respuesta de la promesa
         .then((todosMisProductos)=>{
            todosMisProductos.size === 0 ? console.log("no hay items") : console.log(`Hay ${todosMisProductos.size} items`)
            const documentos  = todosMisProductos.docs.map((doc)=>{
               //console.log(doc)
               return { //armo un objeto nuevo creando una variable id con la info del id del producto y que me lo agregue al doc.data
                  id: doc.id,
                  ...doc.data()
               }}
               );
            setDatos(documentos)
         })
   .catch((err)=>{
      console.log("Hubo problemas al cargar", err)
   })
   .finally(()=>setLoading(false))
}, [id]);

useEffect(()=>{
   datos.length && console.log(datos)
}, [datos])
   
return(
  <div className="container-products">
     {datos.length > 0 ? <ItemList productos={datos}/> :  <Spinner className="spinner" animation="border" variant="primary" />}
  </div>
);
      
   }
   
export default ItemListContainer;
    