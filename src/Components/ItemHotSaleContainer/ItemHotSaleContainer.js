import React, { useState, useEffect } from "react";
import ItemHotSale from "../ItemHotSale/ItemHotSale";
import './ItemHotSaleContainer.css'
import {Spinner} from 'react-bootstrap';
import {getFiresTore} from "../../firebase";

export const ItemHotSaleContainer = () => {
   
   const [datos, setDatos] = useState([])
   const [loading, setLoading] = useState(false);
   

   useEffect(()=>{
      setLoading(true)
      const db = getFiresTore();  //guardo en variable db el acceso a mi base de datos en fireBase
         //guardo en itemsCollection toda mi coleccion de items de firebase
      const itemsCollection = db.collection("items"); 
         //filtro solo items que sean mayores de 40000 y menores de 60000 para HOTSALE
      const itemsHotSale = itemsCollection.where('price', '>', 40000).where('price','<', 60000); 
      itemsHotSale.get() //ejecuto una promesa y ejecuto un .then para capturar la respuesta de la promesa
         .then((productosHotSale)=>{
            productosHotSale.size === 0 ? console.log("no hay items") : console.log(`Hay ${productosHotSale.size} items`)
            const documentos  = productosHotSale.docs.map((doc)=>{
               //armo un objeto nuevo creando una variable id con la info del id del producto y que me lo agregue al doc.data
               return { 
                  id: doc.id,
                  ...doc.data()
               }}
               );
               setDatos(documentos)
               //console.log(items)
         })
   .catch((err)=>{
      console.log("Hubo problemas al cargar", err)
   })
   .finally(()=>setLoading(false))
}, []);
useEffect(()=>{
   datos.length && console.log(datos)
}, [datos])
   
return(
  <div className="container-products">
     {datos.length > 0 ? <ItemHotSale productos={datos}/> :  <Spinner className="spinner" animation="border" variant="primary" />}
  </div>
)
      
   }
   
export default ItemHotSaleContainer;