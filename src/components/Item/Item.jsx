import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {
  return (
    <div className='cardProducto'>
        <img src="" alt={img} />
        <h3> Nombre: {nombre} </h3>
        <p>ID: {id} </p>
        <p> Precio:{precio} </p>
        <Link to={`/item/${id}`}> Ver Detalles</Link>
        {/* <button>Ver Detalle</button> */}


    </div>
  )
}

export default Item