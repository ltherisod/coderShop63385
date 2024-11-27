import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=> {
    const [cart, setCart]= useState([])
        const addItem = (item, cantidad) =>{
            if(isInCart(item.id)){
                const newCart = cart.map((prod)=> {
                    if(prod.id === item.id){
                        return {...item, qty: prod.qty + cantidad}
                    }else{
                        return prod
                    }
                })
                //actualizo el carrito
                setCart(newCart)
            }else{

                setCart([...cart,{...item, qty: cantidad} ])
            }
        }

        const isInCart = (id) =>{
        return cart.some((item)=> item.id === id)
        }
        const clear = () =>{
            setCart([])
        }
        const removeItem = (id) =>{
            setCart(cart.filter((prod) => prod.id !== id))
        } 

        const cartTotal = () =>{
            return cart.reduce((acc, prod)=> (acc += prod.price * prod.qty),0)
        }
        const cartQty = () =>{
            return cart.reduce((acc, prod)=> (acc += prod.qty), 0)
        }
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartTotal, cartQty}}>
            {children}
        </CartContext.Provider>
    )
}