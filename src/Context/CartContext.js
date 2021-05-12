import React, {useEffect, useState} from 'react';

export const CartContext = React.createContext([])


export const CartShop = ({children}) => {

    const [cart, setCart] = useState([{}])
    
    useEffect(()=>{
        console.log(cart)
    },[cart]);

    // DEBEMOS COMPROBAR SI EL PRODUCTO ESTÁ EN EL CARRITO
    const isInCart = (id) => {
        const carrito = cart.find((i)=> i.id === id);
        if (carrito !== undefined){
            return true;
        }else {
            return false;
        }
    };
    



    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}
