import React from 'react'

const WithStyle = (Component, style)=>{
    return function WithStyleComponent(props){
        return <div style={style}><Component {...props}/></div>
    }
}

export default WithStyle