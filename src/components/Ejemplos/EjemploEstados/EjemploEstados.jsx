import React, {useState} from 'react'

const EjemploEstados = () => {
    const [text, setText]= useState('Hola Chicos')
    const cambiarTexto= () =>{
        setText('Chau Chicos')
    }
 
  return (
    <div>
        <p>{text}</p>
        <button className='btn btn-primary' onClick={cambiarTexto}>Cambiar texto</button>
    </div>
  )
}

export default EjemploEstados