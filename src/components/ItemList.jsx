import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {items.map((producto)=><Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList