import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../utils/Routes';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useNavbar} from "./useNavbar";

const Navbar = () => {
    const {handleThemeToggle, getLogoIcon, isDarkMode, navbarClassName} = useNavbar()

    return (
        <nav className={navbarClassName}>
            <div style={styles.logoContainer}>
                {getLogoIcon()}
            </div>
            <div style={styles.linksContainer}>
                <Link to={routes.home} className="link" style={{
                    color: isDarkMode ? 'var(--color-fondo)' : 'var(--color-fondo-dark)',
                    ...styles.link
                }}>
                    Home
                </Link>
                <Link to={routes.favs} className="link" style={{
                    color: isDarkMode ? 'var(--color-fondo)' : 'var(--color-fondo-dark)',
                    ...styles.link
                }}>
                    Favs
                </Link>
                <Link to={routes.contact} className="link" style={{
                    color: isDarkMode ? 'var(--color-fondo)' : 'var(--color-fondo-dark)',
                    ...styles.link
                }}>
                    Contact
                </Link>
            </div>
            <div style={styles.themeToggleContainer}>
                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    onChange={handleThemeToggle}
                />
                <label htmlFor="checkbox"
                       className="checkbox-label"
                       style={{backgroundColor: isDarkMode ? "white" : "black"}}>
                    <i className="fas fa-moon" style={{color: "black"}}></i>
                    <i className="bi bi-sun" style={{color: "white"}}></i>
                    <span className="ball"
                          style={{backgroundColor: isDarkMode ? "black" : "white"}}></span>
                </label>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem 1rem 2rem',
        width: '100vw',
        backgroundColor: 'var(--color-nav-fondo)',
        borderBottom: '2px solid var(--color-secundario)',
        transition: 'var(color-nav-dark) 0.5s',
    },
    logoContainer: {
        marginRight: '2rem',
    },
    logo: {
        color: 'var(--color-texto)',
        transition: 'color 0.5s',
    },
    linksContainer: {
        color: 'var(--color-secundario)',
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        transition: 'color 0.5s',
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        margin: '5px',
        transition: 'color 0.5s',
    },
    themeToggleContainer: {
        marginLeft: 'auto',
    },
};

export default Navbar;
