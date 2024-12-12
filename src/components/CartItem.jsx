import React from 'react'
import { useCart } from '../context/CartContext'
import Swal from 'sweetalert2'

const CartItem = ({prod}) => {
    const {removeItem} = useCart()
    const clearItem = () => {
      Swal.fire({
        title: "Estas seguro?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Producto eliminado ",
            icon: "success"
          });
          removeItem(prod.id)
        }
      });
    }

  return (
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        padding:'1rem',
        gap:'2rem'}}>
        <img src={prod.img} alt={prod.name} style={{width:'4rem'}}/>
        <span>{prod.name}</span>
        <span>{prod.cantidad}</span>
        <span>${prod.price},00</span>
        <span>Precio final: ${prod.price * prod.cantidad},00</span>
        <button className='btn btn-danger' onClick={clearItem}>X</button>
    </div>
  )
}

export default CartItem