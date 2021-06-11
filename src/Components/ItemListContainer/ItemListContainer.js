import React, { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router";
import {getFiresTore} from "../../firebase";
import Loading from '../../Components/Loading/Loading';


export const ItemListContainer = () => {
   
  
   const [datos, setDatos] = useState([])
   const {id} = useParams();
   const [loading, setLoading] = useState(false);

   useEffect(()=>{
      setLoading(true)
      const db = getFiresTore(); 
      const itemsCollection = db.collection("items"); 
      const filterCollection = id ? itemsCollection.where("category","==", id) : itemsCollection;
      filterCollection.get() 
         .then((todosMisProductos)=>{
            //todosMisProductos.size === 0 ? console.log("no hay items") : console.log(`Hay ${todosMisProductos.size} items`)
            const documentos  = todosMisProductos.docs.map((doc)=>{
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
}, [id]);

useEffect(()=>{
}, [datos])
   
return(
  <div className="container-products">
     {loading ? <Loading /> : <ItemList productos={datos}/>}
  </div>
);
      
   }
   
export default ItemListContainer;
    