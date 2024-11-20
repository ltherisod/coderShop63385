import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/api'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [producto, setProducto]= useState({})
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer