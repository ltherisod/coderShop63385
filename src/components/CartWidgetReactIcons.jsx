import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";
const CartWidgetReactIcons = () =>{
    // const {cart} = useContext(CartContext)
    const {cartQuantity} = useCart()
    
    return(
        <div>
            <BsCart4 fontSize={'1.5rem'} color='violet'/>
           { cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidgetReactIcons