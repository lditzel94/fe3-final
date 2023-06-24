import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {routes} from './utils/Routes'
import {ContextGlobal} from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const {toggleTheme, theme} = useContext(ContextGlobal);

    console.log(`Theme ${theme}`)

    return (
        <nav className='navbar'>
            <div className='links'>
                <Link to={routes.home}><h4 className='link'>Home</h4></Link>
                <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
                <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
            </div>
            <button onClick={toggleTheme}>Change theme</button>
        </nav>
    )
}

export default Navbar