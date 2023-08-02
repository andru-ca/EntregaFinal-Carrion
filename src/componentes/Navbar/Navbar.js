import React from 'react'
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
            <img src={logo} className="logo" alt="logo" />
            </div>
     <ul className="nav-links">
     <li className="nav-item"><a href="/">Inicio</a></li>
      <li className="nav-item"><a href="/">Nosotros</a></li>
      <li className="nav-item"><a href="/">Gravel</a></li>
      <li className="nav-item"><a href="/">Montaña</a></li>
      <li className="nav-item"><a href="/">Ruta</a></li>
      <li className="nav-item"><a href="/">Contacto</a></li>
    </ul>
    <div>
        <CartWidget/>
    </div>
    </nav>
  )
}

export default Navbar