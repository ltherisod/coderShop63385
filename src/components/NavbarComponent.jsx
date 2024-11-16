import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink className='aLink' to='/'>Coder Shop</NavLink>
            <NavLink className='aLink' to='/products/nuevos'>Nuevos Ingresos</NavLink>
            <NavLink className='aLink' to='/products/ofertas'>Ofertas</NavLink>
            <NavLink className='aLink'to='/products/mas vendidos'>Más vendidos</NavLink>
            <NavLink  className='aLink'to='/cart'><CartWidget counter={15}/></NavLink>
        </nav>
    )
}

export default NavbarComponent