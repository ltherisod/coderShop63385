import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
const CheckoutUseForm = () => {
    const [orderId, setOrderId] = useState('')
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()
    const {cart, cartTotal, clear} = useContext(CartContext)

    const onSubmit =(dataDelForm)=>{
        //si pasa todas las validaciones
        let order = {
            buyer :{
                name: dataDelForm.nombre,
                address: dataDelForm.direccion,
                email: dataDelForm.email1
            },
            carrito:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        // traer la colecction

        const ventas = collection(db, "orders")
        //agregamos el doc
        addDoc(ventas, order)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
    }
  return (
<div>
    {orderId ? <div>
        <h2>Muchas gracias por tu compra</h2>
        <h4> Tu numero de orden es: {orderId}</h4>
    </div>
    :
    <div>
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input className='form-control' {...register("nombre", {required:true, minLength:3})}/>
            {errors?.nombre?.type === "required" && <p style={{color:'red'}}>Por favor complete el campo Nombre</p>}
            {errors?.nombre?.type === "minLength" && <p style={{color:'red'}}>El nombre debe tener minimo 3 caracteres</p> }
            <label>Dirección</label>
            <input className='form-control' {...register("direccion", {required:true, minLength:10, maxLength:35})}/>
            {errors?.direccion?.type === "required" && <p style={{color:'red'}}>Por favor complete el campo Dirección</p>}
            {errors?.nombre?.type === "minLength" && <p style={{color:'red'}}>La dirección tiene que contener 10 caracteres mínimo</p>}
           <label>Email</label>
           <input className='form-control' type='email' name='email1'{...register("email1", {required:true})}/>
           {errors?.email1?.type === "required" && <p style={{color:'red'}}>Por favor complete el campo Email</p>}
           <label>Confirmación de Email</label>
           <input className='form-control' type='email' name='email2' {...register("email2", {required:true, validate:{equalMails: mail2 => mail2 === getValues().email1}})}/>
           {errors?.email2?.type === "required" && <p style={{color:'red'}}>Por favor complete el campo de Confirmación de email</p>}
           {errors?.email2?.type === "equalMails" && <p style={{color:'red'}}>Los emails deben ser iguales</p>}
           <button className='btn btn-primary' disabled={!cart.length}> Confirmar Compra</button>
        </form>
    </div>}
</div>
  )
}

export default CheckoutUseForm