import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({id, name, img, category, description, price, stock}) {
  return (






<div className="containerItemDetail">
<div className="parent">
<div className="div1">
<picture className='imgProductoItemDetail'>
     <img src={img} alt='{name}' width="100%"/> 
      </picture>
</div>
<div className="div2">
<section className='infoItemDetail'>
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Id: {id}</p>
      <p>Categoría: {category}</p>
      <p>Descripción: { description}</p>
      </section>
    <footer className='footer'>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad cargada", quantity)}  />
    </footer>
</div>
</div>
    
   
    

  </div>


 
  )
}

export default ItemDetail