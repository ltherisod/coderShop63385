import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({prod}) => {
    const {removeItem} = useCart()
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem' }}>
        <img src={prod.img} alt={prod.name} style={{width:'10rem'}}/>
        <span>{prod.name}</span>
        <span>{prod.cantidad}</span>
        <span>${prod.price},00</span>
        <span>Precio final:${prod.cantidad * prod.price},00</span>
        <button className='btn btn-danger' onClick={()=> removeItem(prod.id)}>X</button>
    </div>
  )
}

export default CartItem