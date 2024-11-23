import { createContext, useContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])

    const addToCart = (item, quantity) =>{
       if(isInCart(item.id)){
        setCart(
            cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, cantidad: prod.cantidad + quantity}
                }else{
                    return prod
                }
            })
        )
       }else{
        //sumar un item nuevo al carrito
           setCart([...cart, {...item, cantidad:quantity}])
       }
    }

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }

    const clear = () =>{
        setCart([])
    }

    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, prod)=> (acc += prod.cantidad), 0)
    }

    const cartTotal = () =>{
        return cart.reduce((acc, prod)=> (acc += prod.price * prod.cantidad), 0)
    }
    
    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartQuantity, cartTotal }}>
             {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
