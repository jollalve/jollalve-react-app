import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem', gap: '5rem'}}>
        <img src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_640.png" alt="" />
        <Link className='btn btn-dark' to='/'>Volver a Home</Link><Link/>
    </div>
  )
}

export default Error