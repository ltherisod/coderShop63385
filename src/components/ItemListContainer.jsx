import React, {useState, useEffect} from 'react'
import { Button } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { getProducts } from "../mock/data"
import ItemList from './ItemList'
import useFetch from '../hooks/useFetch'

const ItemListContainer = ({greeting, texto}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const{data} = useFetch('https://rickandmortyapi.com/api/character')
    // const {greeting, texto} = props
    console.log(data.results)

   
  

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> setProducts(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

   
    return(
        <div>
            <h1 className="text-center">{greeting}</h1>
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