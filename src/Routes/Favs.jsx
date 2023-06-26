import React, {useEffect, useState} from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorites")) || [])
    }, [favorites]);

    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
                {favorites && favorites.map((item) => (
                    <Card key={item.id} name={item.name} username={item.username} id={item.id}
                          favorites={favorites}/>
                ))}
            </div>
        </>
    );
};

export default Favs;
