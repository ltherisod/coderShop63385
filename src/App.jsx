import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ComponenteConChildren from './components/EjemploChildren/ComponenteConChildren';
import EjemploEstados from './components/EjemploEstados/EjemploEstados';
import EjemploUseEffect from './components/EjemploUseEffect/EjemploUseEffect';
import EjemploPromise from './components/EjemploPromise/EjemploPromise';

function App() {

console.log('App')
  return (
   <div>
   
      <NavbarReactBootstrap/>
      <ItemListContainer greeting='Bienvenidos al bazar Bartiano' />
      {/* <ComponenteConChildren text='ejemplo uno'>
        <p>Hola chicos, esto que ven aca es una prop children</p>
      </ComponenteConChildren>
      <ComponenteConChildren text='ejemplo dos'>
        <img src='./shopping-cart.png'/>
      </ComponenteConChildren>
      <ComponenteConChildren text='ejemplo tres'>
       <button className='btn btn-danger'>Click!</button>
      </ComponenteConChildren> */}
      {/* <EjemploEstados/>
        <EjemploUseEffect/> */}
        {/* <EjemploPromise/> */}
   </div>
  )
}

export default App
