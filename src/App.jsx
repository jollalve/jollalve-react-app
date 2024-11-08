import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import NavbarNew from './components/NavbarNew'


function App() {

  return (
    <div>
      <NavbarNew/>
      {/* <NavbarComponent/> */}
      <ItemListContainer greeting = 'Bienvenidos a JP Tattoo Supply' thanks = 'Gracias por preferirnos!'/>
    </div>
  
  )
}

export default App
