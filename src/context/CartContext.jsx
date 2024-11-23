import { createContext, useContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])

    return(
        <CartContext.Provider value={{cart}}>
             {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
