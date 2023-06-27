import React from 'react';
import dhLogo from '../assets/LogoHeader.svg';

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
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0",
        background: "var(--color-secundario)",
        color: "var(--color-fondo)",
      },
      logo: {
        maxWidth: '200px',
        padding: "0.8rem",
        margin: 0,
      },
      text: {
        margin: 0,
      },
  };


export default Footer;
