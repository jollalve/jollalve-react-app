import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const {addToCart, itemQuantity} = useCart()
    const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} productos`)
        setCompra(true)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Agregaste ${producto.name} al carrito`,
          showConfirmButton: false,
          timer: 1500
        });
        let cartItem = {
          name: producto.name,
          img: producto.img,
          price: producto.price,
          stock: producto.stock,
          id: producto.id
        }
        addToCart(cartItem, cantidad)
      }
    const stockActualizado = producto.stock - itemQuantity(producto.id)

  return (
    <div className='item-d'>
        <h1>{producto.name}</h1>
        <img src={producto.img} alt={producto.img}/>
        <p className='item-d-description'>{producto.description}</p>
        <h2>${producto.price}</h2>
        {compra 
        ? 
        <div>
        <Link className='btn btn-primary' to='/'>Seguir Comprando</Link><br />
        <Link className='btn btn-dark' to='/cart'>Ir al Carrito</Link>
        </div>
        : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail