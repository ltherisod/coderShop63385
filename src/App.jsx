import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrapHTML from './components/NavbarBootstrapHTML';
import NavbarReactBootstrap from './components/NavbarReactBootstrap';

function App() {


  return (
   <div>
      {/* <NavbarComponent/> */}
      {/* <NavbarBootstrapHTML/> */}
      <NavbarReactBootstrap/>
      <ItemListContainer greeting='Bienvenidos al bazar Bartiano' />
   </div>
  )
}

export default App
