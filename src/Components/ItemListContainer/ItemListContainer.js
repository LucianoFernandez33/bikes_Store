import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import loader from '../../Assets/loader.gif'

export const ItemListContainer = () => {
   
   const [arrayItems, setArrayItems] = useState([])
   
   useEffect(()=>{
      const listas = new Promise((resolve, reject)=>{
      const catalogo = [
      {
         img: "./venzo.jpg",
         description: "Cuadro Venzo Skiline Evo r-29, Aluminio 6061",
         tittle: "SKILINE EVO Shadow Series",
         price: "55000",
         stock: 6,
         id: 1 
      },
      {
         img: "./firebird.jpg",
         description: "Nueva Firebird R29 Coyote 21V Shimano",
         tittle: "Firebird Coyote ",
         price: "50000",
         stock: 6,
         id: 2
      },
      {
         img: "./raleigh.jpg",
         description: "Nueva Raleight R29 Mojave 2.0 cuadro aluminio",
         tittle: "Raleight Mojave 2.0",
         price:" 50000",
         stock: 6,
         id: 3
      },
      {
         img: "./venzo-atix.jpeg",
         description: "R29 - 2x10v - Full Shimano Deore",
         tittle: "Venzo Atix - 2x10v",
         price:" 140000",
         stock: 6,
         id: 4
      },
      {
         img: "./venzo-primal.jpeg",
         description: "R29 - 3x8 - 24v, Shimano Altus, frenos a disco hidráulicos",
         tittle: "Venzo PRIMAL XC Shadow",
         price:" 75000",
         stock: 6,
         id: 5
      },
      {
         img: "./venzo-raptor.jpeg",
         description: "R29 - 3x8 - Shimano Altus, frenos a disco hidráulicos",
         tittle: "Venzo RAPTOR EVO",
         price:" 130000",
         stock: 6,
         id: 5
      }

      ]
         setTimeout(()=>{
            resolve(catalogo)
         },2000)
      })
   
   listas.then((res)=>{
      setArrayItems(res)
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
    