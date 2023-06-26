import React, {useEffect, useState} from "react";
import doctorImage from "../assets/doctor.jpg"
import {useNavigate} from "react-router-dom";

const Card = ({name, username, id, favorites}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setIsFavorite(favorites.some(user => user.id === id))
    }, [favorites, id]);

    useEffect(() => {

    }, [isFavorite])

    const toggleFavorite = () => {
        const favoritesStorage = JSON.parse(localStorage.getItem("favorites")) || []

        const updatedFavoritesStorage = isFavorite
            ? favoritesStorage.filter(user => user.id !== id)
            : [...favoritesStorage, {name, username, id}];

        localStorage.setItem("favorites", JSON.stringify(updatedFavoritesStorage));
        setIsFavorite(!isFavorite);
    };

    const showDetail = () => navigate(`/detail/${id}`)
    // onClick={showDetail}

    return (
        <div className="card">
            <img className="cardPic" src={doctorImage} alt={id}/>
            <h3>{name}</h3>
            <p>{username}</p>
            <button onClick={toggleFavorite} className="favButton">
                <span role="img">{isFavorite ? "❤️" : "🖤"}</span>
            </button>
        </div>
    );
};

export default Card;
