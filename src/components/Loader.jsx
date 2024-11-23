import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{
        width:'100%',
        height:'90vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <PacmanLoader color='yellow' size={90} />
    </div>
  )
}

export default Loader