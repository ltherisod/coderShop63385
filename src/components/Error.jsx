import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:15}}>
        <img src="https://img.freepik.com/vector-gratis/fondo-error-404-diseno-divertido_1167-219.jpg?w=2000" alt='error' style={{width:'90%', marginBottom:15}}/>
        <Link className='btn btn-dark'to='/'>Volver a Home</Link>
    </div>
  )
}

export default Error