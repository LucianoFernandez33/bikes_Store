import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import {Spinner} from 'react-bootstrap';

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
         marca: "VENZO",
         category: "bicicletas",
         id: 1 
      },
      {
         img: "./firebird.jpg",
         description: "Nueva Firebird R29 Coyote 21V Shimano",
         tittle: "Firebird Coyote ",
         price: "50000",
         stock: 6,
         marca: "FIREBIRD",
         category: "bicicletas",
         id: 2
      },
      {
         img: "./raleigh.jpg",
         description: "Nueva Raleight R29 Mojave 2.0 cuadro aluminio",
         tittle: "Raleight Mojave 2.0",
         price:" 50000",
         stock: 6,
         marca: "RALEIGH",
         category: "bicicletas",
         id: 3
      },
      {
         img: "./venzo-atix.jpeg",
         description: "R29 - 2x10v - Full Shimano Deore",
         tittle: "Venzo Atix - 2x10v",
         price:" 140000",
         stock: 6,
         marca: "VENZO",
         category: "bicicletas",
         id: 4
      },
      {
         img: "./venzo-primal.jpeg",
         description: "R29 - 3x8 - 24v, Shimano Altus, frenos a disco hidráulicos",
         tittle: "Venzo PRIMAL XC Shadow",
         price:" 75000",
         stock: 6,
         marca: "VENZO",
         category: "bicicletas",
         id: 5
      },
      {
         img: "./venzo-raptor.jpeg",
         description: "R29 - 3x8 - Shimano Altus, frenos a disco hidráulicos",
         tittle: "Venzo RAPTOR EVO",
         price:" 130000",
         stock: 6,
         marca: "VENZO",
         category: "bicicletas",
         id: 6
      },
      {
         img: "./vairo-3.5.jpg",
         description: "R29 - XR 3.5 - Bicicleta MountainBike de Aluminio Rodado 29, Frenos a Disco, Suspensión C/Bloqueo, Llantas Doble Pared, Full Shimano.",
         tittle: "Nueva VAIRO XR 3.5 2021",
         price:" 130000",
         stock: 6,
         marca: "VAIRO",
         category: "bicicletas",
         id: 7
      },
      {
         img: "./vairo-3.8.jpg",
         description: "R29 - 3x8 - Freno a Disco Shimano / Tektro",
         tittle: "Nueva VAIRO XR 3.8 29",
         price:" 130000",
         stock: 6,
         marca: "VAIRO",
         category: "bicicletas",
         id: 8
      },
      {
         img: "./vairo-5.0.jpg",
         description: "R29 - XR 5.0 - Aluminio 6061T6,Freno A disco, Hidráulico – Shimano/Tektro",
         tittle: "Nueva VAIRO 5.0",
         price:" 150000",
         stock: 6,
         marca: "VAIRO",
         category: "bicicletas",
         id: 9
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
  <div className="container-products">
     {arrayItems.length > 0 ? <ItemList productos={arrayItems}/> :  <Spinner className="spinner" animation="border" variant="primary" />}
  </div>
)
      
   }
   
export default ItemListContainer;
    