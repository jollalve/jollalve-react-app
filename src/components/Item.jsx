import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className="card" key={product.id} style={{width:'18rem', margin:15}}>
          <img src={product.img} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/item/${product.id}`} className="btn btn-danger">Ver mas</Link>
          </div>
          </div>
  )
}

export default Item 