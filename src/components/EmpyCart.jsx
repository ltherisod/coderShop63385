import React from 'react'
import { Link } from 'react-router-dom'

const EmpyCart = () => {
  return (
    <div>
        <h2>Tu carrito esta vacio!</h2>
        <h4>Te invitamos a ver nuestros productos</h4>
        <Link to='/' className='btn btn-dark'>Ir a comprar</Link>
    </div>
  )
}

export default EmpyCart