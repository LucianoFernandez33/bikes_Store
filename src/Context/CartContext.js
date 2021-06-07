import React, {useEffect, useState} from 'react';


export const CartContext = React.createContext([])

export const CartShop = ({children}) => {

    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[])
    const [vacio, setVacio] = useState(false)
    
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart)
        
    },[cart]);


    // DEBEMOS COMPROBAR SI EL PRODUCTO ESTÁ EN EL CARRITO
    const isInCart = (id) => {
        const carrito = cart.some((i)=> i.id === id);
      
        return carrito;
    };

    
    //AGREGA UN PRODUCTO NUEVO EN EL CARRITO, SI EL PRODUCTO YA ESTÁ LE SUMO LA CANTIDAD SOLAMENTE
    const addCart =(item, count)=>{
        if (isInCart(item.id)){
            console.log('el producto ya esta en el carrito')
            addQuantityProduct(item, count)
        } else {   
            setCart([...cart, {...item, cantidad: count }])
        }
    }


    //EN ESTA FUNCION SE SUMA LA CANTIDAD DE ITEMS DEL MISMO PRODUCTO SI ES QUE YA SE ENCUENTRA EN EL CARRITO
    const addQuantityProduct = (item ,count) =>{
        const cantidad = [...cart];
        cantidad.forEach((c) =>{
            c.id === item.id &&(c.cantidad += count)
        })
        setCart(cantidad)
    }
    

    //SUMO EL PRECIO TOTAL A PAGAR POR LA CANTIDAD TOTAL DE LOS PRODUCTOS EN EL CARRITO
    const addQuantityPrice = () => {
        const addTot = cart.reduce((x,y) => x + y.price * y.cantidad, 0);
        return addTot;
    }
   
    //SUMO EL TOTAL POR CANTIDAD DEL MISMO PRODUCTO
    const totalPriceItems = (price, cantidad) =>{
        const totalPriceItems = price * cantidad;
        console.log(totalPriceItems, "precio cant prod")
        return totalPriceItems;
    }

    //ELIMINO UN PRODUCTO DEL CARRITO
    const removeItem=(item) =>{
        const newCart = cart.filter(x=> x.id !== item)
        setCart(newCart)
        console.log(item)
    }

    //MUESTRO LAS UNIDADES ALMACENADAS EN EL CARRITO EN EL NAVBAR
    const units = () =>{
        const number = cart.reduce((x,y) => (x + y.cantidad), 0);
        console.log(number)
        if (number == 0) {
            setVacio(false)
        }
        console.log(number)
        return number;
        
    }

    // Borro todos los productos del carrito
    const clear = () =>
    setCart([]);

    function printDiv(imprimeme) {
        var contenido= document.getElementById(imprimeme).innerHTML;
        var contenidoOriginal= document.body.innerHTML;
   
        document.body.innerHTML = contenido;
   
        window.print();
   
        document.body.innerHTML = contenidoOriginal;
   }

    
    
    return (
        <CartContext.Provider value={{cart, addCart, clear, removeItem, units, addQuantityPrice, totalPriceItems, printDiv, vacio}}>
            {children}
        </CartContext.Provider>
    )
}
