import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import FetchContainer from './components/Ejemplos/EjemploFetch/FetchContainer';


function App() {

  return (
   <div>
   
      <NavbarReactBootstrap/>
      {/* <ItemListContainer greeting='Bienvenidos al bazar Bartiano' /> */}
      <FetchContainer/>
   </div>
  )
}

export default App
