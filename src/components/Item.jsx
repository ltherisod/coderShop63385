import React from 'react'

const Item = ({product}) => {
  return (
    <div className="card" style={{width:'18rem', marginTop:10}}>
  <img src={product.img} className="card-img-top" alt={product.name}/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">${product.price}</p>
    <a href="#" className="btn btn-primary">Ver más</a>
  </div>
</div>
  )
}

export default Item