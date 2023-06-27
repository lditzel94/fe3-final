import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {routes} from './utils/Routes';
import {ContextGlobal} from './utils/global.context';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {THEME} from "./utils/constants";

const Navbar = () => {
    const {globalState: {theme, data}, dispatchGlobalState} = useContext(ContextGlobal)

    const handleThemeToggle = () => {
        // document.body.classList.toggle('dark');
        dispatchGlobalState({
            type: "SWITCH_THEME",
            payload: theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
        })
    };

    const getLogoIcon = () => {
        if (theme === 'light') {
            return (
                <div>
                    <i className="bi bi-caret-right-square-fill"></i>
                    <i className="bi bi-h-square"></i>
                </div>
            );
        } else if (theme === 'dark') {
            return (
                <div>
                    <i className="bi bi-caret-right-square"></i>
                    <i className="bi bi-h-square-fill"></i>
                </div>
            );
        }
        return null;
    };

    const navbarClassName = `navbar ${theme}`;

    return (
        <nav className={navbarClassName}>
            <div style={styles.logoContainer}>
                {getLogoIcon()}
            </div>
            <div style={styles.linksContainer}>
                <Link to={routes.home} className="link" style={styles.link}>
                    Home
                </Link>
                <Link to={routes.favs} className="link" style={styles.link}>
                    Favs
                </Link>
                <Link to={routes.contact} className="link" style={styles.link}>
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
                <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="bi bi-brightness-low"></i>
                    <span className="ball"></span>
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
        color: 'var(--color-fondo-dark)',
        transition: 'color 0.5s',
    },
    themeToggleContainer: {
        marginLeft: 'auto',
    },
};


export default Navbar;
