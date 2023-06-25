import React, { useState }  from "react";
import doctorImage from "../assets/doctor.jpg"

const Card = ({name, username, id}) => {
    const [isFavorite, setIsFavorite] = useState(false);


    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
      };
    
      const addFav = () => {
        const existingData = localStorage.getItem("favorites");
        const favorites = existingData ? JSON.parse(existingData) : [];
        const cardData = { name, username, id };
        favorites.push(cardData);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        toggleFavorite();
      };
    

    const detailedPage = () => {
        //Logica para redirigir a la pagina especifica al clickear la imagen
    }

    return (
        <div onClick={detailedPage} className="card">
            <img className="cardPic" src={doctorImage} alt={id}/>
            <h3>{name}</h3>            
            <p>{username}</p>
            <button onClick={addFav} className="favButton"><span role="img">{isFavorite ? "❤️":"🖤"}</span></button>
        </div>
    );
};

export default Card;
