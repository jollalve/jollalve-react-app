import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} productos`)
      }
  return (
    <div className='item-d'>
        <h1>{producto.name}</h1>
        <img src={producto.img} alt={producto.img}/>
        <p className='item-d-description'>{producto.description}</p>
        <h2>${producto.price}</h2>
        <ItemCount stock={producto.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail