import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarNew from './components/NavbarNew'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';
import CheckOutUseForm from './components/CheckOutUseForm';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarNew/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = 'Bienvenidos a JP Tattoo Supply'/>}/>
            <Route path='/products/:category' element={<ItemListContainer greeting = 'Categoria: '/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartView/>}/>
            <Route path='/checkout' element={<CheckOutUseForm/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  
  )
}

export default App
