import React, { useState, useEffect } from "react";
import ItemHotSale from "../ItemHotSale/ItemHotSale";
import './ItemHotSaleContainer.css'
import {Spinner} from 'react-bootstrap';
import { useParams } from "react-router";
import {getFiresTore} from "../../firebase";

export const ItemHotSaleContainer = () => {
   
   const [datos, setDatos] = useState([])
   const {price} = useParams();
   const hotPrice = { min: 40000, max:65000 }
   const [loading, setLoading] = useState(false);
   const [items, setItems] = useState([]);

   useEffect(()=>{
      setLoading(true)
      const db = getFiresTore();  //guardo en variable db el acceso a mi base de datos en fireBase
      const itemsCollection = db.collection("items"); //guardo en itemsCollection toda mi coleccion de items de firebase
      const itemsHotSale = itemsCollection.where('price', '>', 40000).where('price','<', 60000); //filtro solo items por categoryId
      itemsHotSale.get() //ejecuto una promesa y ejecuto un .then para capturar la respuesta de la promesa
         .then((productosHotSale)=>{
            productosHotSale.size === 0 ? console.log("no hay items") : console.log(`Hay ${productosHotSale.size} items`)
            const documentos  = productosHotSale.docs.map((doc)=>{
               return { //armo un objeto nuevo creando una variable id con la info del id del producto y que me lo agregue al doc.data
                  id: doc.id,
                  ...doc.data()
               }}
               );
               setItems(documentos)
               console.log(items)
         })
   .catch((err)=>{
      console.log("Hubo problemas al cargar", err)
   })
   .finally(()=>setLoading(false))
}, []);
useEffect(()=>{
   items.length && console.log(items)
}, [items])
   
return(
  <div className="container-products">
     {items.length > 0 ? <ItemHotSale productos={items}/> :  <Spinner className="spinner" animation="border" variant="primary" />}
  </div>
)
      
   }
   
export default ItemHotSaleContainer;