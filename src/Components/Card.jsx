import React, {useEffect, useState} from "react";
import doctorImage from "../assets/doctor.jpg";
import {useNavigate} from "react-router-dom";

const Card = ({name, username, id, favorites, updateFavorites}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsFavorite(favorites.some((user) => user.id === id));
    }, [favorites, id]);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        const updatedFavorites = isFavorite
            ? favorites.filter((user) => user.id !== id)
            : [...favorites, {name, username, id}];

        updateFavorites(updatedFavorites);
        setIsFavorite(!isFavorite);
    };

    const showDetail = () => navigate(`/detail/${id}`);

    return (
        <CardContainer>
            <StyledCard onClick={showDetail}>
                <CardImg src={doctorImage} alt={id}/>
                <CardName value={name}/>
                <CardUsername value={username}/>
                <CardFavoriteButton onClick={(e) => toggleFavorite(e)}>
                    <CardFavoriteButtonIcon isFavorite={isFavorite}/>
                </CardFavoriteButton>
            </StyledCard>
        </CardContainer>
    );
};

const CardContainer = ({children}) => (
    <div style={styles.container}>
        {children}
    </div>
)

const StyledCard = ({children, ...props}) => (
    <div className="card" style={styles.card} {...props}>
        {children}
    </div>
)

const CardImg = (props) => (
    <img {...props} className="cardPic" style={styles.cardPic}/>
)

const CardName = ({value}) => (
    <h3 style={styles.name}>{value}</h3>
)

const CardUsername = ({value}) => (
    <p style={styles.user}>{value}</p>
)

const CardFavoriteButton = ({children, ...props}) => (
    <button {...props} className="favButton" style={styles.favButton}>
        {children}
    </button>
)

const CardFavoriteButtonIcon = ({isFavorite}) => (
    <span role="img">{isFavorite ? "❤️" : "🖤"}</span>
)

const styles = {
    container: {
        marginBottom: "2rem",
    },
    card: {
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
    },
    cardPic: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "5%",
    },
    favButton: {
        position: "absolute",
        padding: "10px",
        border: "none",
        background: "none",
        width: "10%",
        height: "10%",
        cursor: "pointer",
        top: "2%",
        left: "80%",
    },
    name: {
        margin: 0,
        padding: "1rem 1rem 1rem 1rem",
        fontSize: "18px",
        fontWeight: "bold",
        color: "var(--color-texto)",
    },
    user: {
        margin: 0,
        fontSize: "14px",
        color: "var(--color-secundario)",
    },
};

export default Card;
