import React from "react";
import Card from "../Components/Card";
import {useFavorites} from "../Hooks/useFavorites";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const {favorites, updateFavorites} = useFavorites()

    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
                {favorites && favorites.map((item) => (
                    <Card key={item.id} name={item.name} username={item.username} id={item.id}
                          favorites={favorites} updateFavorites={updateFavorites}/>
                ))}
            </div>
        </>
    );
};

export default Favs;
