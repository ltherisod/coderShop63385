import React from 'react'

const FetchItem = ({personaje}) => {
 
  return (
    <div>
        <img src={personaje.image} alt={personaje.name}/>
        <h5>{personaje.name}</h5>
        <p>{personaje.gender}</p>
        <p>{personaje.status}</p>
    </div>
  )
}

export default FetchItem