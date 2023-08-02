import React from 'react'
import iconCart from './cart.svg';

const CartWidget = () => {

  return (
  <div className="cart-item">
   <img src={iconCart} className="icon-cart" alt="cart" />
   <span className="number">5</span>
  </div>
  )
}

export default CartWidget 