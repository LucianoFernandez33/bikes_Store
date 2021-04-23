import React, { useState, useEffect } from "react";
import ItemList from "../items/ItemList";
import loader from '../../assets/loader.gif'


const ItemListContainer = () => {
   
   const [arrayItems, setArrayItems] = useState([])
   
   useEffect(()=>{
      
   const listas = new Promise((resolve, reject)=>{
      const productos = [
      {
         img:"../assets/Imagenes/venzo.jpg",
         description:"Cuadro Venzo Skiline Evo r-29, Aluminio 6061",
         title:"SKILINE EVO Shadow Series",
         price:"55000",
         stock: 4,
         id:"001"
      },
      {
         img:"../assets/Imagenes/firebird.jpg",
         description:"Nueva Firebird R29 Coyote 21V Shimano",
         title:"Firebird Coyote ",
         price:"50000",
         stock: 2,
         id:"002"
      },
      {
         img:"../../assets/Imagenes/raleigh.jpg",
         description:"Nueva Raleight R29 Mojave 2.0 cuadro aluminio",
         title:"Raleight Mojave 2.0",
         price:"50000",
         id:"003"
      }
   ]
      setTimeout(()=>{
         resolve(productos)
      },2000)
   })
   
   listas.then((rest)=>{
      setArrayItems(rest)
   })
   .catch(()=>{
      console.log("Hubo problemas al cargar")
   })
   .finally(()=>{
      console.log("Control finalizado")
   })
},[]);
   
return(
  <div>
     {arrayItems.length > 0 ? <ItemList productos={arrayItems}/> : <img src={loader}/>}
  </div>
)
      
   }
   
export default ItemListContainer;
    