import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='text-color'>
        <h1>Tu carrito esta vacio!</h1>
        <h3>Te invitamos a ver nuestros productos</h3>
        <Link to='/' className='btn btn-danger'>IR A COMPRAR</Link><br />
    </div>
  )
}

export default EmptyCart