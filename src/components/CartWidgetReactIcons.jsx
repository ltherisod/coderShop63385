import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
const CartWidgetReactIcons = () =>{
    return(
        <div>
            <BsCart4 fontSize={'1.5rem'} color='violet'/>
            <Badge bg="danger">15</Badge>
        </div>
    )
}

export default CartWidgetReactIcons