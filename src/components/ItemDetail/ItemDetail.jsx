import React from 'react'
import './ItemDetail.css'

const ItemDetail = ( {id,nombre,precio,img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo repellat commodi. Corporis possimus magnam consequuntur! Possimus iste voluptate facilis, perspiciatis ullam maxime nemo at error quibusdam eos consectetur alias!</p>
        <img src= {img} alt= {nombre} />
    </div>
  )
}

export default ItemDetail