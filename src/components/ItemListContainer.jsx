import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {  useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemListContainer = ({greeting, texto}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const {category}= useParams()
    //FIREBASE
    useEffect(()=>{
        setLoading(true)
        //Conectamos con nuestra coleccion
        const productsCollection = category 
        ? query(collection(db, "productos"), where("category", "==", category)) 
        : collection(db,"productos")
        //pedir documentos
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((product)=>{
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        } )
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    
    return(
        <div>
           
            <h1 className="text-center">{greeting}<span style={{textTransform:'capitalize', color:'violet'}}>{category}</span></h1>
           {loading ? <Loader/>: <ItemList products={products}/>}
         </div>
    )
}
export default ItemListContainer