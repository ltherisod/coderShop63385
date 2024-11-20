import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const sumar = () =>{
        if(count < stock){

            setCount(count + 1 )
        }
    }

    const restar = () =>{
        if(count > 0){
            setCount(count - 1 )
        }
    }

    const handleOnAdd = () =>{
        if(stock !== 0){
            onAdd(count)
        }
    }

  return (
   <>
    <div>
        <button className='btn btn-primary' onClick={sumar}>+</button>
        <span className='btn '>{count}</span>
        <button className='btn btn-primary' onClick={restar}>-</button>
    </div>
    <button className='btn btn-primary mt-1' onClick={handleOnAdd} disabled={count === 0}>Agregar al carrito</button>
  
   </>
  )
}

export default ItemCount