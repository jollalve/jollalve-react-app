import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {greeting} = props
    const {category} = useParams()
    
    useEffect(()=>{
        setLoading(true)
        const productsCollection = category 
        ? query(collection(db, "productos"), where("category", "==", category)) 
        : collection(db, "productos")
        getDocs(productsCollection)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[category])

    return (
        <div className="text-color">
            <h1 className="text-center p-3">{greeting} <span style={{textTransform: 'capitalize', color: 'red'}}>{category}</span></h1>
            {loading ? <Loader/> : <ItemList products={products}/>} 
        </div>
    )
}

export default ItemListContainer