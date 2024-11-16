import { NavLink } from "react-router-dom"


const NavbarBootstrapHTML = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>CoderShop</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to='/products/mas vendidos'>Más Vendidos</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to='/products/ofertas'>Ofertas</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to='/products/nuevos'>Nuevos Ingresos</NavLink></li>
          </ul>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
    )
}

export default NavbarBootstrapHTML