import React, { useEffect, useState } from "react";
import doctorImage from "../assets/doctor.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id, favorites, updateFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavorite(favorites.some((user) => user.id === id));
  }, [favorites, id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const updatedFavorites = isFavorite
      ? favorites.filter((user) => user.id !== id)
      : [...favorites, { name, username, id }];

    updateFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

  const showDetail = () => navigate(`/detail/${id}`);

  return (
    <div className="card" style={styles.card} onClick={showDetail}>
      <img className="cardPic" src={doctorImage} alt={id} style={styles.cardPic} />
      <h3>{name}</h3>
      <p>{username}</p>
      <button onClick={(e) => toggleFavorite(e)} className="favButton" style={styles.favButton}>
        <span role="img">{isFavorite ? "❤️" : "🖤"}</span>
      </button>
    </div>
  );
};

const styles = {
    card: {
      position: "relative",
      borderRadius: "5%",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: "center",
      width: "200px",
      padding: "0.5rem",
      border: "0.5px solid var(--secondary-color)",
      "&:hover": {
        border: "0.5px solid rgb(206, 217, 142)",
      },
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
  };

export default Card;
