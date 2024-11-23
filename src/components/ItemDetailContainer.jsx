import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getOneProduct(id)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <div className='text-color d-flex justify-content-around align-items-center flex-wrap item-d-container'>
    <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer