import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const docRef = doc(collectionProd, id) 
      getDoc(docRef)
      .then((res)=> {
        if (res.exists()) {
            setProducto({ id: res.id, ...res.data() })
        } else {
            setProducto(null)
        }
    })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[id])

  return (
    <div className='text-color d-flex justify-content-around align-items-center flex-wrap item-d-container'>
    {loading ? <Loader/> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer