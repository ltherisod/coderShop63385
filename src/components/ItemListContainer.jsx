import { Button } from "react-bootstrap"
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting, texto}) => {
    // const {greeting, texto} = props
    console.log('ItemListContainer')
    const onAdd = (cantidad) =>{
        alert(`Agregaste al carrito ${cantidad} productos`)
    }
    return(
        <div>
            <h1 className="text-center">{greeting}</h1>
            {/* Ejemplos */}
            {/* <p>{texto}</p>
            <Button variant="primary">Primary</Button>
            <button type="button" className="btn btn-danger">Danger</button> */}
            {/* Esto mas adelante no va a estar en este componente */}
            <ItemCount stock={12} onAdd ={onAdd}/>

        </div>
    )
}
export default ItemListContainer