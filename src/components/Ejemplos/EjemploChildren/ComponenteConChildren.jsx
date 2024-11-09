import React from 'react'

const ComponenteConChildren = ({children, text=''}) => {
    // const {children}=props
  return (
    <div>
        <p>{text}</p>
        <div>
            {children}
        </div>
    </div>
  )
}

export default ComponenteConChildren