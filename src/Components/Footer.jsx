import React from 'react';
import dhLogo from '../assets/DH.png';

const Footer = () => {
 
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Powered by</p>
      <img src={dhLogo} alt="DH-logo" style={styles.logo} />
    </footer>
  );
};

const styles = {
    footer: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative',
      bottom: 0,
      width: '90%',
      height: '40px',
      marginTop: '2rem',
      background: 'var(--primary-color)',
      color: 'var(--text-color)',
    },
    logo: {
      width: '200px',
      margin: 0,
    },
    text: {
      margin: 0,
      paddingTop: '0.7rem',
    },
  };


export default Footer;
