import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [datos, setDatos] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{ 
       const getItem = () =>{

            return new Promise((resolve, reject)=>{
                const catalogo = [
                    {
                        id: 1,
                        img: "../spy-bullet.png",
                        description: "SPY BULLET 29 ALUMINIO 6061",
                        tittle: "SPY BULLET",
                        price: "50000",
                        stockTotal: 6,
                        marca: "SPY",
                        category: "bicicletas"
                    },
                    {
                        id: 2,
                        img: "../spy-bullet-24v.png",
                        description: "SPY BULLET 29 ALUMINIO 6061",
                        tittle: "SPY BULLET 29 24v. MEC DISC",
                        price:" 55000",
                        stockTotal: 6,
                        marca: "SPY",
                        category: "bicicletas"
                    },
                    {
                        id: 3, 
                        img: "../venzo.jpg",
                        description: "Cuadro Venzo Skiline Evo r-29",
                        tittle: "SKILINE EVO Shadow Series",
                        price: "55000",
                        stockTotal: 10,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 4,
                        img: "../venzo-atix.jpeg",
                        description: "R29 - 2x10v - Full Shimano Deore",
                        tittle: "Venzo Atix - 2x10v",
                        price:" 140000",
                        stockTotal: 8,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 5,
                        img: "../venzo-primal.jpeg",
                        description: "R29 - 3x8 - 24v, Shimano Altus, frenos a disco hidráulicos",
                        tittle: "Venzo PRIMAL XC Shadow",
                        price:" 75000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 6,
                        img: "../venzo-raptor.jpeg",
                        description: "R29 - 3x8 - Shimano Altus, frenos a disco hidráulicos",
                        tittle: "Venzo RAPTOR EVO",
                        price:" 130000",
                        stockTotal: 7,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 7,
                        img: "../vairo-3.5.jpg",
                        description: "R29 - XR 3.5 - Bicicleta MountainBike de Aluminio Rodado 29, Frenos a Disco, Suspensión C/Bloqueo, Llantas Doble Pared, Full Shimano.",
                        tittle: "Nueva VAIRO XR 3.5 2021",
                        price:" 130000",
                        stockTotal: 3,
                        marca: "VAIRO",
                        category: "bicicletas"
                    },
                    {
                        id: 8,
                        img: "../vairo-3.8.jpg",
                        description: "R29 - 3x8 - Freno a Disco Shimano / Tektro",
                        tittle: "Nueva VAIRO XR 3.8 29",
                        price:" 130000",
                        stockTotal: 2,
                        marca: "VAIRO",
                        category: "bicicletas"
                    },
                    {
                        id: 9,
                        img: "../vairo-5.0.jpg",
                        description: "R29 - XR 5.0 - Aluminio 6061T6,Freno A disco, Hidráulico – Shimano/Tektro",
                        tittle: "Nueva VAIRO 5.0",
                        price:" 150000",
                        stockTotal: 1,
                        marca: "VAIRO",
                        category: "bicicletas"
                    },
                    {
                        id: 10,
                        img: "../Accesorios/venzo-casco.png",
                        description: "Con regulación y vicera - Talles M / L - Colores: negro/rojo, negro/verde, negro/azul",
                        tittle: "Casco Modelo 017",
                        price:" 5000",
                        stockTotal: 5,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 11,
                        img: "../Accesorios/venzo-casco02.png",
                        description: "Con regulación y vicera - Talles M / L - Colores: negro/rojo, negro/verde, negro/azul",
                        tittle: "Casco Modelo 010",
                        price:" 5500",
                        stockTotal: 5,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 12,
                        img: "../Accesorios/venzo-asiento.png",
                        description: "Rieles cuero sintetico - Tamaño 270 x 145 mm",
                        tittle: "Asiento VENZO MX",
                        price:" 6000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 13,
                        img: "../Accesorios/venzo-balizas.png",
                        description: "5 luces led - 3 funciones- Modo de carga 2 pillas AAA",
                        tittle: "Baliza VENZO 001-008",
                        price:" 3500",
                        stockTotal: 3,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 14,
                        img: "../Accesorios/venzo-farol.png",
                        description: "1 luz led - 3 funciones - Carcaza de aluminio - Resistente a la lluvia",
                        tittle: "Farol delantero VENZO F01-006",
                        price:" 5500",
                        stockTotal: 2,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 15,
                        img: "../Accesorios/venzo-gomaEspuma.png",
                        description: "Largo 128 mm",
                        tittle: "Puños VENZO de goma espuma E05-",
                        price:" 2500",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 16,
                        img: "../Accesorios/venzo-guantes-cortos.png",
                        description: "Dedos cortos - Con abrojo y almohadillas - Talles S/M/L/XL",
                        tittle: "Guantes modelo 003",
                        price:" 6000",
                        stockTotal: 10,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 17,
                        img: "../Accesorios/venzo-guantes-largos.png",
                        description: "Dedos largos - Con abrojo y almohadillas - Talles S/M/L/XL",
                        tittle: "Guantes modelo 001",
                        price:" 150000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    }, 
                    {
                        id: 18,
                        img: "../Accesorios/venzo-lentes-rojos.png",
                        description: "2 lentes cambiables - Proteccion UV",
                        tittle: "Lentes modelo 001",
                        price:" 8000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 19,
                        img: "../Accesorios/venzo-lentes.png",
                        description: "2 lentes cambiables - Proteccion UV",
                        tittle: "Lentes modelo 002",
                        price:" 8000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 20,
                        img: "../Accesorios/venzo-llave.png",
                        description: "Lllaves allen medidas 2/2.5/3/4/5/6/8 - Saca cubiertas - Llaves de tubo 8/9/10/12",
                        tittle: "Herramienta VENZO F33 002-13 funciones",
                        price:" 4000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 21,
                        img: "../Accesorios/venzo-portasilla.png",
                        description: "Material fibra de carbono - Diametro 31.6 - Longitud 350mm",
                        tittle: "Portasilla VENZO XTV",
                        price:" 7000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    } 
                ];
                //generamos un retraso de 1 segundo al mostrar la card
                setTimeout(()=>{
                    resolve(catalogo); //resuelve la promesa
                    console.log(catalogo)
                },1000);
                })
        } 

    getItem().then(dato =>{
        const itemFilter = dato.filter(item => item.id == id)
        console.log(itemFilter)
        setDatos(itemFilter)}
    )
     
 },[]);

 return(
        <div>
            {datos.length > 0  ? <ItemDetail datos={datos[0]}/> : 
            <p>Cargando...</p>}
        </div>  
    );     
};

export default ItemDetailContainer;