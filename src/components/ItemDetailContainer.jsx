import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const [loading, setLoading]= useState(false)
    const { id } = useParams()
    console.log(id)
    useEffect(()=>{
      setLoading(true)
        getOneProduct(id)
        .then((res)=> setProducto(res))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[])
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setProducto(res.find((item)=> item.id === '2')))
    //     .catch((error)=>console.log(error))
    // },[])
  return (
    <div>
       {loading ? <Loader/> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer