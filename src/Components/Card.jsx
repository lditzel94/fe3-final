import React, {useEffect, useState} from "react";
import doctorImage from "../assets/doctor.jpg"
import {useNavigate} from "react-router-dom";

const Card = ({name, username, id, favorites, updateFavorites}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setIsFavorite(favorites.some(user => user.id === id))
    }, [favorites, id]);

    const toggleFavorite = (e) => {
        e.stopPropagation()
        const updatedFavorites = isFavorite
            ? favorites.filter(user => user.id !== id)
            : [...favorites, {name, username, id}];
        
        updateFavorites(updatedFavorites)
        setIsFavorite(!isFavorite);
    };

    const showDetail = () => navigate(`/detail/${id}`)
    
    return (
        <div className="card" onClick={showDetail}>
            <img className="cardPic" src={doctorImage} alt={id}/>
            <h3>{name}</h3>
            
            <p>{username}</p>
            <button onClick={(e) => toggleFavorite(e)} className="favButton">
                <span role="img">{isFavorite ? "❤️" : "🖤"}</span>
            </button>
        </div>
    );
};

export default Card;
