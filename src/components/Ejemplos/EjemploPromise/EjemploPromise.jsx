import React, { useEffect } from 'react'
import {getProducts} from '../../../mock/data'

const EjemploPromise = () => {
    let error = true
    const Simu = new Promise((resolve, reject)=>{
        if(error){
            reject('No hay hamburguesa')
        }else{
            resolve('Hay hamburguesa')
        }
    })

    const fakeApi = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve([{name:'random', price:15, stock:4}, {name:'random2', price:19, stock:24}])
            }
        },5000)
    })
  
    useEffect(()=>{
        fakeApi
        .then((res)=> console.log('Respuesta: ', res))
        .catch((error)=> console.log(error))

    },[])

    useEffect(()=>{
        getProducts()
        .then((res)=> console.log(res))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div>
        <p>Ejmeplo Promise</p>
    </div>
  )
}

export default EjemploPromise