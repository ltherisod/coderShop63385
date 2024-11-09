import React from 'react'
import FetchItem from './FetchItem'

const FetchList = ({personajes}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {personajes.map((personaje)=><FetchItem key={personaje.id} personaje={personaje}/>)}
    </div>
  )
}

export default FetchList