import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import { serverTimestamp, collection, addDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const CheckOutUseForm = () => {
    const [orderId, setOrderId] = useState('')
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()
    const {cart, cartTotal, clear} = useContext(CartContext)
    const onSubmit = (dataForm) => {
        let order = {
            buyer : {
                name: dataForm.nombre,
                address: dataForm.direccion, 
                email: dataForm.email1,
            },
            carrito: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection (db, "ordenes")
        //agregamos el doc
        addDoc(ventas, order)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
    }
  return (
    <div className='d-flex flex-column align-items-center text-color gap-3 mt-5'>
    {orderId ? <div>
                <h1>Muchas gracias por tu compra</h1>
                <h4>Tu numero de Orden es: <span style={{color:'red'}}>{orderId}</span></h4>
    </div>
    :
    <div className='d-flex flex-column align-items-center text-color gap-3 mt-5'>
        <h1>CheckOut</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input className='form-control' {...register("nombre", {required:true, minLength:3, })} />

            {errors?.nombre?.type === "required" && <p style={{color:'red'}}>Complete el campo nombre</p>}
            {errors?.nombre?.type === "minLength" && <p style={{color:'red'}}>El nombre debe tener 3 caracteres como minimo</p>}

            <label>Direccion</label>
            <input className='form-control' {...register("direccion", {required:true, minLenght:10, maxLength:40})}/>

            {errors?.direccion?.type === "required" && <p style={{color:'red'}}>Debe ingresar una direccion</p>}
            {errors?.direccion?.type === "minLength" && <p style={{color:'red'}}>La direccion es muy corta</p>}

            <label>Email</label>
            <input className='form-control' type='email' name='emai1'
            {...register("email1", {required:true})}/>

            {errors?.email1?.type === "required" && <p style={{color:'red'}}>Por favor ingrese el Email</p>}

            <label>Confirmacion Email</label>
            <input className='form-control' type='email' name='email2'
            {...register("email2", {required:true, validate:{equalMails: mail2 => mail2 === getValues().email1}})}/>

            {errors?.email2?.type === "required" && <p style={{color:'red'}}>Por favor complete el campo Email</p>}
            {errors?.email2?.type === 'equalMails' && <p style={{color:'red'}}>Los Emails deben ser iguales</p>}

            <button className='btn btn-danger mt-3' disabled={!cart.length}>Confirmar</button>

        </form>
    </div>
    }
    </div>
  )
}

export default CheckOutUseForm