import React, { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }
    const onAddHandler = () => {
        if (count > 0){
            onAdd(count)
        } else {
            alert('Debes agregar al menos 1 producto al carrito para poder comprar')
        }
    }

  return (
    <div className='text-center p-3'>
        {stock === 0 && <p>SIN STOCK</p>}
        <div>
            <button className='btn btn-danger m-1' onClick={restar}>-</button>
            <span className='btn btn-light m-1'>{count}</span>
            <button className='btn btn-success m-1' onClick={sumar}>+</button>
        </div>
        <button className='btn btn-primary m-1' onClick={onAddHandler} disabled={stock === 0}>COMPRAR</button>
    </div>
  )
}

export default ItemCount