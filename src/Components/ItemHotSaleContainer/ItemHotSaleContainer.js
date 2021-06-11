import React, { useState, useEffect } from "react";
import ItemHotSale from "../ItemHotSale/ItemHotSale";
import './ItemHotSaleContainer.css'
import {getFiresTore} from "../../firebase";
import Loading from '../../Components/Loading/Loading';

export const ItemHotSaleContainer = () => {
   
   const [datos, setDatos] = useState([])
   const [loading, setLoading] = useState(false);
   

   useEffect(()=>{
      setLoading(true)
      const db = getFiresTore(); 
      const itemsCollection = db.collection("items"); 
      const itemsHotSale = itemsCollection.where('price', '>', 40000).where('price','<', 60000); 
      itemsHotSale.get() 
         .then((productosHotSale)=>{
           // productosHotSale.size === 0 ? console.log("no hay items") : console.log(`Hay ${productosHotSale.size} items`)
            const documentos  = productosHotSale.docs.map((doc)=>{
               return { 
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
}, []);
useEffect(()=>{
   //datos.length && console.log(datos)
}, [datos])
   
//{datos.length > 0 ? <ItemHotSale productos={datos}/> :  <Spinner className="spinner" animation="border" variant="primary" />}
return(
  <div className="container-products">
      {loading ? <Loading /> : <ItemHotSale productos={datos}/>}
  </div>
)
      
   }
   
export default ItemHotSaleContainer;