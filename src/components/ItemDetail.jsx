import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext, useCart } from '../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    // const {addToCart, cart}= useContext(CartContext)
    const {addToCart, itemQuantity}= useCart()
    const onAdd = (cantidad) =>{
      setCompra(true)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Agregaste ${producto.name} al carrito`,
        showConfirmButton: false,
        timer: 1500
      });
      // let cartItem = {
      //   name: producto.name,
      //   img: producto.img,
      //   price: producto.price,
      //   stock:producto.stock,
      //   id:producto.id
      // }
      //   addToCart(cartItem, cantidad)
      addToCart(producto, cantidad)
    }
   const stockActualizado = producto.stock - itemQuantity(producto.id)
  return (
    <div>
        <h1>Detalle del producto:{producto.name}</h1>
        <img src={producto.img} alt={producto.img}/>
        <p>{producto.description}</p>
        <p>${producto.price}</p>
 {compra 
 ? <div>
  <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
    <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
  </div> 
 : <ItemCount stock={stockActualizado} onAdd={onAdd}/>
 }
    </div>
  )
}

export default ItemDetail