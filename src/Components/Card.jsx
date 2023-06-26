import React, {useEffect, useState} from "react";
import doctorImage from "../assets/doctor.jpg"
import {useNavigate} from "react-router-dom";

const Card = ({name, username, id, favorites, updateFavorites}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setIsFavorite(favorites.some(user => user.id === id))
    }, [favorites, id]);

    const toggleFavorite = () => {
        const updatedFavorites = isFavorite
            ? favorites.filter(user => user.id !== id)
            : [...favorites, {name, username, id}];

        updateFavorites(updatedFavorites)
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
