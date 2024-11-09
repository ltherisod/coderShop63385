import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import FetchContainer from './components/Ejemplos/EjemploFetch/FetchContainer';
import ComponenteConChildren from './components/Ejemplos/EjemploChildren/ComponenteConChildren';
import { StyledComponent } from './components/Ejemplos/EjmploHoc/EjemploHoc';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
   <div>
   
      <NavbarReactBootstrap/>
      <ItemListContainer greeting='Bienvenidos al bazar Bartiano' />
      <ItemDetailContainer/>
      {/* <ComponenteConChildren>

       
      </ComponenteConChildren>
      <FetchContainer/> */}
      {/* <StyledComponent/> */}
   </div>
  )
}

export default App
