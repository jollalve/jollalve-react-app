import React from 'react'
import { useCart } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

const CartView = () => {
    const {cart} = useCart()
  return (
    <div className='cartContainer text-color'>
        {!cart.length 
        ? <EmptyCart/> 
        : <div> 
        <h1>TU CARRITO</h1>
        <CartList/>
        </div>}
    </div>
  )
}

export default CartView