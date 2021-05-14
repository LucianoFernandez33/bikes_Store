import React, {useEffect, useState} from 'react';
import ItemCount from '../Components/ItemCount/ItemCount';

export const CartContext = React.createContext([])


export const CartShop = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(()=>{
        console.log(cart)
    },[cart]);

    // DEBEMOS COMPROBAR SI EL PRODUCTO ESTÁ EN EL CARRITO
    const isInCart = (id) => {
        const carrito = cart.some((i)=> i.id === id);
      
        return carrito;
    };
    
    //AGREGA UN PRODUCTO NUEVO EN EL CARRITO
    const addCart =(item, count)=>{
        setCart([...cart, {...item, cantidad: count }])
    }

    // Borro todos los productos del carrito
    const clear = () =>{ 
        setCart([]);
    };

    //ELIMINO UN PRODUCTO DEL CARRITO
    const removeItem=(item) =>{
        const newCart = cart.filter(x=> x.id === item)
        setCart(newCart)
        console.log('borro producto')
        //setCart(cart.filter((rem) => rem.cart.id !== cart))
    }


    return (
        <CartContext.Provider value={[cart, addCart, clear, removeItem]}>
            {children}
        </CartContext.Provider>
    )
}
