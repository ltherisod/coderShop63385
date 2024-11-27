import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
function App() {


  return (
    <CartProvider>
      <BrowserRouter>
         <NavbarReactBootstrap/>
         <Routes>
           <Route path='/' element={<ItemListContainer greeting='Bienvenidos al After n°2' />} />
           <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenidos al After n°2' />} />
           <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
           <Route path='/cart' element={ <CartContainer/>}/>
         </Routes>
      </BrowserRouter>
     
    </CartProvider>
  )
}
export default App
