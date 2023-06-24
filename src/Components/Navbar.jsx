import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/Routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className='links'>
        <Link to={routes.home}><h4 className='link'>Home</h4></Link>
        <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
        <Link to={routes.detail}><h4 className='link'>Detail</h4></Link>
        <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
      </div>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar