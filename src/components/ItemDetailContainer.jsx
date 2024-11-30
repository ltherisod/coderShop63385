import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const [loading, setLoading]= useState(false)
    const { id } = useParams()

    //FIREBASE

    useEffect(()=>{
      setLoading(true)
      //collection y proyect firebase
      const collectionProd = collection(db, "productos")
      //creamos una referencia
      const docRef = doc(collectionProd,id )
      // const docRef = doc(db, "productos", id)
      //traer el documento
      getDoc(docRef)
      .then((res)=> setProducto({id: res.id, ...res.data()}))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])
    //MOCK LOCAL
    // useEffect(()=>{
    //   setLoading(true)
    //     getOneProduct(id)
    //     .then((res)=> setProducto(res))
    //     .catch((error)=>console.log(error))
    //     .finally(()=> setLoading(false))
    // },[])
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