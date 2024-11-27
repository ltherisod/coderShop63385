import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
  const [purchase, setPurchase] = useState(false)
  const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) =>{
      setPurchase(true)
       addItem(producto, cantidad)
    }
  return (
    <div style={{display:'FLEX', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle de: {producto.name}</h2>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.description}</p>
        <p>Stock: {producto.stock}</p>
        <p>${producto.price},00</p>
      { purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> :  <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail