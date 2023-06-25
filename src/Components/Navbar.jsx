import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {routes} from './utils/Routes'
import {ContextGlobal} from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const {toggleTheme, theme} = useContext(ContextGlobal);

    console.log(`Theme ${theme}`)

    const handleThemeToggle = () => {
        document.body.classList.toggle('dark');
      };


    return (
        <nav className={`navbar ${theme}`}>
        <h2>DH Odonto</h2>
            <div className='links'>
                <Link to={routes.home}><h4 className='link'>Home</h4></Link>
                <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
                <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
            </div>
            <div>
            <input type='checkbox' className='checkbox' id='checkbox' onChange={handleThemeToggle} />
            <label htmlFor='checkbox' className='checkbox-label'>
                <i className='fas fa-moon'></i>
                <i className='fas fa-sun'></i>
                <span className='ball'></span>
            </label>
      </div>
        </nav>
    )
}

export default Navbar