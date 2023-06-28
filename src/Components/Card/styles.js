import React from "react";

export const CardContainer = ({children}) => {
    const container = {
        marginBottom: "2rem",
    }

    return (
        <div style={container}>
            {children}
        </div>
    );
}

export const StyledCard = ({children, ...props}) => {
    const card = {
        backgroundColor: "var(--color-nav-fondo)",
        position: "relative",
        borderRadius: "5%",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        width: "15rem",
        padding: "0.5rem",
        border: "none",
        "&:hover": {
            border: "0.5px solid rgb(206, 217, 142)",
        },
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    }

    return (
        <div className="card" style={card} {...props}>
            {children}
        </div>
    );
}

export const CardImg = (props) => {
    const cardPic = {
        width: "100%",
        height: "auto",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "5%",
    }

    return (
        <img {...props} className="cardPic" style={cardPic}/>
    );
}

export const CardName = ({value}) => {
    const name = {
        margin: 0,
        padding: "1rem 1rem 1rem 1rem",
        fontSize: "18px",
        fontWeight: "bold",
        color: "var(--color-texto)",
    }

    return (
        <h3 style={name}>{value}</h3>
    );
}

export const CardUsername = ({value}) => {
    const user = {
        margin: 0,
        fontSize: "14px",
        color: "var(--color-secundario)",
    }

    return (
        <p style={user}>{value}</p>
    );
}

export const CardFavoriteButton = ({children, ...props}) => {
    const favButton = {
        position: "absolute",
        padding: "10px",
        border: "none",
        background: "none",
        width: "10%",
        height: "10%",
        cursor: "pointer",
        top: "2%",
        left: "80%",
    }

    return (
        <button {...props} className="favButton" style={favButton}>
            {children}
        </button>
    );
}

export const CardFavoriteButtonIcon = ({isFavorite}) => (
    <span role="img">{isFavorite ? "❤️" : "🖤"}</span>
)