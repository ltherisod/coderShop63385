import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]= useState(1)
    const sumar = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    const restar = () =>{
        if(count > 0){
            setCount(count-1)
        }
    }
    
    console.log('SoyItemCount')

    const onAddHandler = ()=>{
        onAdd(count)
    }
  return (
    <div>
    <div>
        <button className='btn btn-danger' onClick={restar} >-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={onAddHandler}>Comprar</button>
    {/* otra opcion */}
    {/* <button className='btn btn-primary' onClick={()=>onAdd(count)}>Comprar</button> */}
    </div>
  )
}

export default ItemCount