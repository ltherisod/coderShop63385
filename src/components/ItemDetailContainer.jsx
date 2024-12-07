import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const [loading, setLoading]= useState(false)
    const [invalidItem, setInvalidItem]= useState(false)
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
      .then((res)=> {
        if(res.data()){
          setProducto({id: res.id, ...res.data()})
        }else{
          setInvalidItem(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])

    if(invalidItem){
      return <div>
        <h3>El producto no existe!</h3>
        <Link to='/' className='btn btn-dark'> Volver a home</Link>
      </div>
    }

  return (
    <div>
       {/* {loading 
       ? <Loader/> 
       : invalidItem 
       ?<div>
        <h3>El producto no existe!</h3>
        <Link to='/' className='btn btn-dark'> Volver a home</Link>
      </div> 
      : <ItemDetail producto={producto}/>} */}
      {loading 
       ? <Loader/> 
       : <ItemDetail producto={producto}/> }
    </div>
  )
}

export default ItemDetailContainer