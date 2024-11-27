import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidgetReactIcons = () =>{
    const {cartQty}= useContext(CartContext)
    return(
        <div>
            <BsCart4 fontSize={'1.5rem'} color='violet'/>
           {cartQty() > 0 && <Badge bg="danger">{cartQty()}</Badge>}
        </div>
    )
}

export default CartWidgetReactIcons