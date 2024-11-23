import React, { useEffect, useState } from "react"
import { getProduct } from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {greeting} = props
    const {category} = useParams()

    useEffect(() => {
        setLoading(true)
        getProduct()
        .then((res)=>{
            if(category){
                setProducts(res.filter((prod)=> prod.category === category))
            } else {
                setProducts(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
    },[category])

    return (
        <div className="text-color">
            <h1 className="text-center p-3">{greeting} <span style={{textTransform: 'capitalize', color: 'red'}}>{category}</span></h1>
            {loading ? <p>Cargando...</p> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer