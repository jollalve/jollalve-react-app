import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartList = () => {
    const {cart, cartTotal, clear} = useCart()
    const clearCart = () => {
      Swal.fire({
        title: "Estas seguro?",
        text: "Esta accion no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado ",
            text: "Se han eliminado los productos del carrito",
            icon: "success"
          });
          clear()
        }
      });
    }

  return (
    <div className='text-color'>
        {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
        <span>Total a pagar: ${cartTotal()}</span><br />
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem'
        }}>
        <button className='btn btn-danger' onClick={clearCart}>Borrar Carrito</button><br />
        <Link className='btn btn-success' to='/checkout'>Ir a pagar</Link>
        </div>
    </div>
  )
}

export default CartList