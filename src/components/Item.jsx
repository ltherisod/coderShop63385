import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Item = ({producto}) => {
  const navegar = useNavigate()
  return (
    <div>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.name}</p>
        <p>${producto.price},00</p>
        {/* template string */}
        <Link className='btn btn-primary' to={`/item/${producto.id}`}>Ver más</Link>
        {/* Sin template string */}
        {/* <Link className='btn btn-primary' to={'/item/'+producto.id}>Ver más</Link> */}
        {/* Con useNavigate */}
        {/* <button className='btn btn-primary' onClick={()=> navegar(`/item/${producto.id}`)} >Ver más</button> */}
    </div>
  )
}

export default Item