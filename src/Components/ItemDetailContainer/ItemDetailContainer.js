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
                        description: "FRENOS A DISCO SYPO - PEDALES ALUMINIO 9/16",
                        descriptionTwo: "SUSPENSIÓN SPY CON BLOQUEO Y PRECARGA",
                        descriptionThree: "CAMBIO SHIMANO RD-TY300 - DESCARRILADOR SHIMANO FD-TY500",
                        sizes: "TALLES: 16 - 18 - 20",
                        tittle: "SPY BULLET 29 ALUMINIO 6061T 21v.",
                        price: "50000",
                        stockTotal: 6,
                        marca: "SPY",
                        category: "bicicletas"
                    },
                    {
                        id: 2,
                        img: "../spy-bullet-24v.png",
                        description: "FRENOS A DISCO SYPO - PEDALES ALUMINIO 9/16",
                        descriptionTwo: "SUSPENSIÓN SPY CON BLOQUEO Y PRECARGA",
                        descriptionThree: "CAMBIO SHIMANO RD-M310 - DESCARRILADOR SHIMANO FD-TY700",
                        sizes: "TALLES: 16 - 18 - 20",
                        tittle: "SPY BULLET 29 ALUMINIO 6061 24v.",
                        price:" 55000",
                        stockTotal: 6,
                        marca: "SPY",
                        category: "bicicletas"
                    },
                    {
                        id: 3, 
                        img: "../venzo.jpg",
                        description: "CUADRO VENZO SKILINE EVO R-29 - HORQUILLA CON REGULACIÓN + BLOQUEO",
                        descriptionTwo: "FRENOS COREDIDE  A DISCO MECÁNICO - PEDALES DE ALUMINIO",
                        descriptionThree: "21v. CON CAMBIO, DESCARRILADOR Y MANIJAS SHIMANO",
                        sizes: "TALLES: 14(XS), 16(S), 18(M), 20(L), 22(XL)",
                        tittle: "Venzo Loki Evo - Shadow Series",
                        price: "55000",
                        stockTotal: 10,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 4,
                        img: "../venzo-atix.jpeg",
                        description: "R29 - 2x10v - Full Shimano Deore",
                        descriptionTwo: "FRENOS A DISCO HIDRÁULICOS SHIMANO - PEDALES DE ALUMINIO",
                        descriptionThree: "CUADRO DE ALUMINIO 7005 - SUSPENSION CON BLOQUEO Y REGULACIÓN",
                        sizes: "TALLES: 14(XS), 16(S), 18(M), 20(L), 22(XL)",
                        tittle: "VENZO ATIX - 2x10v",
                        price:" 140000",
                        stockTotal: 8,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 5,
                        img: "../venzo-primal.jpeg",
                        description: "24v. (3X8) SHIMANO ALTUS",
                        descriptionTwo: "FRENOS A DISCO HIDRÁULICOS SHIMANO - PEDALES DE ALUMINIO",
                        descriptionThree: "CUADRO DE ALUMINIO 6061 - SUSPENSION CON BLOQUEO Y REGULACIÓN",
                        sizes: "TALLES: 14(XS), 16(S), 18(M), 20(L)",
                        tittle: "Venzo PRIMAL XC Shadow R29",
                        price:" 75000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 6,
                        img: "../venzo-raptor.jpeg",
                        description: "24v. (3x8) SHIMANO ALTUS",
                        descriptionTwo: "FRENOS A DISCO HIDRÁULICOS SHIMANO - PEDALES DE ALUMINIO",
                        descriptionThree: "CUADRO DE ALUMINIO 6061 - SUSPENSION CON BLOQUEO Y REGULACIÓN",
                        sizes: "TALLES: 14(XS), 16(S), 18(M), 20(L)",
                        tittle: "Venzo RAPTOR EVO R29",
                        price:" 130000",
                        stockTotal: 7,
                        marca: "VENZO",
                        category: "bicicletas"
                    },
                    {
                        id: 7,
                        img: "../vairo-3.5.jpg",
                        description: "HORQUILLA CON BLOQUEO - FRENOS A DISCO MECÁNICO",
                        descriptionTwo: "DESCARRILADOR TRASERO SHIMANO TX800 6/7 SPEEDS",
                        descriptionThree: "DESCARRILADOR DELANTERO SHIMANO 31.8 42T",
                        sizes: "TALLES: 16(S), 18(M), 20(L) 22(XL)",
                        tittle: "Nueva VAIRO XR 3.5 2021 ALLOY R29",
                        price:" 130000",
                        stockTotal: 3,
                        marca: "VAIRO",
                        category: "bicicletas"
                    },
                    {
                        id: 8,
                        img: "../vairo-3.8.jpg",
                        description: "HORQUILLA VAIRO ALLOY / BLOQUEO AL POSTE - FRENOS A DISCO SHIMANO",
                        descriptionTwo: "DESCARRILADOR TRASERO SHIMANO ACERA 8 VELOCIDADES",
                        descriptionThree: "DESCARRILADOR DELANTERO SHIMANO 34.9 42T",
                        sizes: "TALLES: 14(XS), 16(S), 18(M), 20(L)",
                        tittle: "VAIRO XR 3.8 29er ALLOY 6061",
                        price:" 130000",
                        stockTotal: 2,
                        marca: "VAIRO",
                        category: "bicicletas"
                    },
                    {
                        id: 9,
                        img: "../vairo-5.0.jpg",
                        description: "HORQUILLA CON SUSPENSIÓN TAPARED 100MM RECORRIDO",
                        descriptionTwo: "DESCARRILADOR TRASERO SHIMANO DEORE 10 SPEEDS",
                        descriptionThree: "DESCARRILADOR DELANTERO SHIMANO DEORE 2*10",
                        sizes: "TALLES: 16(S), 18(M), 20(L), 22(XL)",
                        tittle: "VAIRO XR 5.0 R29",
                        price:" 150000",
                        stockTotal: 1,
                        marca: "VAIRO",
                        category: "bicicletas"
                    },
                    {
                        id: 10,
                        img: "../Accesorios/venzo-casco.png",
                        description: "Modelo 017",
                        descriptionTwo: "CON REGULACIÓN Y VICERA",
                        descriptionThree: "COLORES: NEGRO/ROJO - NEGRO/VERDE - NEGRO/AZUL",
                        sizes: "TALLES: M - L",
                        tittle: "CASCO VENZO",
                        price:" 5000",
                        stockTotal: 5,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 11,
                        img: "../Accesorios/venzo-casco02.png",
                        description: "MODELO 010",
                        descriptionTwo: "CON REGULACIÓN Y VICERA",
                        descriptionThree: "COLORES: NEGRO/ROJO - NEGRO/VERDE - NEGRO/AZUL",
                        sizes: "TALLES: M - L",
                        tittle: "CASCO VENZO",
                        price:" 5500",
                        stockTotal: 5,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 12,
                        img: "../Accesorios/venzo-asiento.png",
                        description: "RIELES CUERO SINTÉTICO",
                        descriptionTwo: "TAMAÑO 270 X 145mm",
                        descriptionThree: "SOPORTE DE ACERO - PESO: 290grs",
                        sizes: "TALLES: UNIVERSAL",
                        tittle: "ASIENTO VENZO MX",
                        price:" 6000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 13,
                        img: "../Accesorios/venzo-balizas.png",
                        description: "MODELO 001 - 008",
                        descriptionTwo: "5 LUCES LED - 3 FUNCIONES",
                        descriptionThree: "MODO DE CARGA: 2 PILAS AAA",
                        sizes: "TALLES: UNIVERSAL",
                        tittle: "BALIZA VENZO",
                        price:" 3500",
                        stockTotal: 3,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 14,
                        img: "../Accesorios/venzo-farol.png",
                        description: "MODELO F01-006",
                        descriptionTwo: "1 LUZ LED- 3 FUNCIONES - INCLUYE SOPORTE PARA MANUBRIO",
                        descriptionThree: "CARCAZA DE ALUMINIO RESISTENTE A LA LLUVIA",
                        sizes: "TALLES: UNIVERSAL",
                        tittle: "FAROL DELANTERO VENZO",
                        price:" 5500",
                        stockTotal: 2,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 15,
                        img: "../Accesorios/venzo-gomaEspuma.png",
                        description: "MODELO E05-018",
                        descriptionTwo: "GOMA ESPUMA",
                        descriptionThree: "LARGO: 128mm",
                        sizes: "TALLES: UNIVERSAL",
                        tittle: "PUÑOS VENZO",
                        price:" 2500",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 16,
                        img: "../Accesorios/venzo-guantes-cortos.png",
                        description: "MODELO 003",
                        descriptionTwo: "DEDOS CORTOS",
                        descriptionThree: "CON ABROJO Y ALMOHADILLAS",
                        sizes: "TALLES: S - M - L - XL",
                        tittle: "GUANTES VENZO",
                        price:" 6000",
                        stockTotal: 10,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 17,
                        img: "../Accesorios/venzo-guantes-largos.png",
                        description: "MODELO 001",
                        descriptionTwo: "DEDOS LARGOS",
                        descriptionThree: "CON ABROJO Y ALMOHADILLAS",
                        sizes: "TALLES: S - M - L - XL",
                        tittle: "GUANTES VENZO",
                        price:" 150000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    }, 
                    {
                        id: 18,
                        img: "../Accesorios/venzo-lentes-rojos.png",
                        description: "MODELO 001",
                        descriptionTwo: "2 LENTES CAMBIABLES - PROTECCIÓN UV",
                        descriptionThree: "INCLUYE ESTUCHE",
                        sizes: "COLORES: NEGRO, AZUL, ROJO, BLANCO",
                        tittle: "LENTES",
                        price:" 8000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 19,
                        img: "../Accesorios/venzo-lentes.png",
                        description: "MODELO 002",
                        descriptionTwo: "2 LENTES CAMBIABLES - PROTECCIÓN UV",
                        descriptionThree: "INCLUYE ESTUCHE",
                        sizes: "COLORES: NEGRO, AZUL, ROJO, BLANCO",
                        tittle: "LENTES",
                        price:" 8000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 20,
                        img: "../Accesorios/venzo-llave.png",
                        description: "MODELO F33 002-13 FUNCIONES",
                        descriptionTwo: "LLAVES ALLEN MEDIDAS 2/2.5/3/4/5/6/8",
                        descriptionThree: "SACA CUBIERTAS - LLAVES DE TUBO 8/9/10/12",
                        sizes: "3 TUBOS - 2 TIPOS DE DESTORNILLADORES",
                        tittle: "HERRAMIENTA VENZO",
                        price:" 4000",
                        stockTotal: 6,
                        marca: "VENZO",
                        category: "accesorios"
                    },
                    {
                        id: 21,
                        img: "../Accesorios/venzo-portasilla.png",
                        description: "MATERIAL FIBRA DE CARBONO",
                        descriptionTwo: "DIÁMETRO: 31.6 - LONGITUD: 350mm",
                        descriptionThree: "PESO: 213grs",
                        sizes: "COLORES: NEGRO, AZUL, ROJO, BLANCO",
                        tittle: "PORTASILLA VENZO XTV",
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