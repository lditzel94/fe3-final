import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/Routes';
import { ContextGlobal } from './utils/global.context';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ContextGlobal);

  const handleThemeToggle = () => {
    document.body.classList.toggle('dark');
  };

  const getLogoIcon = () => {
    if (theme === 'light') {
      return <i className="bi bi-h-square"></i>;
    } else if (theme === 'dark') {
      return <i className="bi bi-h-square-fill"></i>;
    }
    return null;
  };

  return (
    <nav className={`navbar ${theme}`} style={styles.navbar}>
      <div style={styles.logoContainer}>
        {getLogoIcon()}
      </div>
      <div style={styles.linksContainer}>
        <Link to={routes.home} className='link' style={styles.link}>
          Home
        </Link>
        <Link to={routes.favs} className='link' style={styles.link}>
          Favs
        </Link>
        <Link to={routes.contact} className='link' style={styles.link}>
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
    width:'100vw',
  },
  logoContainer: {
    marginRight: '2rem',
  },
  logo: {
    color: 'var(--text-color)',
  },
  
  linksContainer: {
    color: 'var(--secondary-color)',
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    transition: '1s',
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '5px',
    color: 'var(--primary-color)',
  },
  themeToggleContainer: {
    marginLeft: 'auto',
  },

};

export default Navbar;
