import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Esto es si estoy usando bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';


function App() {
  return (
   <BrowserRouter>
    <NavbarReactBootstrap/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos'/>}/>
      <Route path='/products/:category' element={<ItemListContainer greeting='Bienvenidos a la categoria: '/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
