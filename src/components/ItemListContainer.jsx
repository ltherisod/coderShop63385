import React, {useState, useEffect} from 'react'
import { getProducts } from "../mock/data"
import ItemList from './ItemList'
import {  useParams } from 'react-router-dom'


const ItemListContainer = ({greeting, texto}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const {category}= useParams()
    // const {greeting, texto} = props
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=>{
            if(category){
                //filtrar
                setProducts(res.filter((prod)=> prod.category === category ))
            }else{
                setProducts(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    return(
        <div>
          
            <h1 className="text-center">{greeting}<span style={{textTransform:'capitalize', color:'violet'}}>{category}</span></h1>
            {/* Ejemplos */}
            {/* <p>{texto}</p>
            <Button variant="primary">Primary</Button>
            <button type="button" className="btn btn-danger">Danger</button> */}
            {/* Esto mas adelante no va a estar en este componente */}
           {loading ? <p>Cargando...</p>: <ItemList products={products}/>}
           
        </div>
    )
}
export default ItemListContainer