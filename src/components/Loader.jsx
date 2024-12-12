import React from 'react'
import { PulseLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='loader'>
        <PulseLoader color="#ff0000" size={20}/>
    </div>
  )
}

export default Loader