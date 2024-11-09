import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    // useEffect(()=>{
    //     getOneProduct('1')
    //     .then((res)=> setProducto(res))
    //     .catch((error)=>console.log(error))
    // },[])
    useEffect(()=>{
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === '2')))
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer