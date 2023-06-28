import React from "react";

export const FooterContainer = ({children}) => {
    const footer = {
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
    }

    return (
        <footer style={footer}>
            {children}
        </footer>
    );
}

export const Text = ({value}) => {
    const text = {
        margin: 0,
    }

    return (
        <p style={text}>{value}</p>
    );
}

export const Img = (props) => {
    const logo = {
        maxWidth: '200px',
        padding: "0.8rem",
        margin: 0,
    }

    return (
        <img {...props} style={logo}/>
    );
}