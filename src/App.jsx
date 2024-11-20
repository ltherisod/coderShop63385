import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';

function App() {


  return (
   <div>
      <NavbarReactBootstrap/>
      <ItemListContainer greeting='Bienvenidos al After n°2' />
   </div>
  )

}
export default App
