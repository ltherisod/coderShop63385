import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
function App() {


  return (
   <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Bienvenidos al bazar Bartiano' texto='Otra prop'/>
   </div>
  )
}

export default App
