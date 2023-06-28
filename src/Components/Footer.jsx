import React from 'react';
import dhLogo from '../assets/LogoHeader.svg';

const Footer = () => (
    <FooterContainer>
        <Text value={"Powered by"}/>
        <Img src={dhLogo} alt="DH-logo"/>
    </FooterContainer>
);

const FooterContainer = ({children}) => (
    <footer style={styles.footer}>
        {children}
    </footer>
)

const Text = ({value}) => (
    <p style={styles.text}>{value}</p>
)

const Img = (props) => (
    <img {...props} style={styles.logo}/>
)

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
