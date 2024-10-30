import { Button } from "react-bootstrap"

const ItemListContainer = ({greeting, texto}) => {
    // const {greeting, texto} = props
    return(
        <div>
            <h1 className="text-center">{greeting}</h1>
            {/* Ejemplos */}
            {/* <p>{texto}</p>
            <Button variant="primary">Primary</Button>
            <button type="button" className="btn btn-danger">Danger</button> */}

        </div>
    )
}
export default ItemListContainer