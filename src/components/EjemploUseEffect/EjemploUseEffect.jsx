import React,{useEffect, useState} from 'react'

const EjemploUseEffect = () => {
    const [on, setOn]= useState(true)
    const [count, setCount] = useState(1)
    //Se ejecuta siempre
    useEffect(()=>{
     console.log('El useEffect que se ejecuta siempre')   
    })

    //Una vez
    useEffect(()=>{
        console.log('se ejecuta una vez')
    },[])

    //A la escucha de un cambio en particular
    useEffect(()=>{
        console.log('A la escucha de la variable')
    },[on])

    const stateHandler = () =>{
        setOn(!on)
    }
  return (
    <div>
        <button className='btn btn-danger'onClick={stateHandler}>Click!</button>
        <button className='btn btn-danger' onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default EjemploUseEffect