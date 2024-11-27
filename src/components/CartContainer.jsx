import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const CartContainer = () => {
    const {cart, clear, cartTotal} = useContext(CartContext)
  return (
    <div>
        {
            !cart.length 
            ? <div>
                <h2> Tu carrito esta vacio!</h2>
                <Link to='/'>Ir a comprar</Link>
            </div>
            :<div>
                <h2> Tu Carrito!</h2>
                {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
                <span>Saldo total: {cartTotal()}</span>
                <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
            </div>
        }
    </div>
  )
}

export default CartContainer