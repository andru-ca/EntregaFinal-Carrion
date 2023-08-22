import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price}) => {
  return (

  <article className='card'>
    <picture className='imgProducto'>
     <img src={img} alt='{name}' width="100%"/> 
      </picture>
    <section className='info'>
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
    <footer className='footer'>
   
    <Link to={`/item/${id}`}> <button className="addToCart">Ver Producto</button> </Link>
    </footer>
    </section>
  </article>
  )
}

export default Item