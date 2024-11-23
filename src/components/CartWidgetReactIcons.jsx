import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";
const CartWidgetReactIcons = () =>{
    // const {cart} = useContext(CartContext)
    const {cart} = useCart()
    console.log(cart)
    return(
        <div>
            <BsCart4 fontSize={'1.5rem'} color='violet'/>
            <Badge bg="danger">15</Badge>
        </div>
    )
}

export default CartWidgetReactIcons